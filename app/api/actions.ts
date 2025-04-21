"use server";

import { CheckoutFormSchema } from "@/components/form/schema";
import { cookies } from "next/headers";
import { prismaClient } from "@prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { sendEmail } from "@/lib/sendEmails";
import { PayOrderTemplate } from "@/components/email-templates/pay-order";

export async function createOrder(data: CheckoutFormSchema) {
  try {
    const cookieStore = await cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Could not find cart token");
    }

    const userCart = await prismaClient.cart.findFirst({
      where: {
        token: cartToken,
      },
      include: {
        user: true,
        cartItems: {
          include: {
            extraIngredients: true,
            productVariation: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!userCart) {
      throw new Error("Could not find cart");
    }

    if (userCart.totalPrice == 0) {
      throw new Error("Cart is empty!");
    }

    const order = await prismaClient.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phoneNumber: data.phone,
        address: data.address,
        comment: data.comment,
        totalPrice: userCart.totalPrice,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.cartItems),
      },
    });

    await prismaClient.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalPrice: 0,
      },
    });

    await prismaClient.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const paymentUrl = "https://resend.com/docs/send-with-nextjs";

    await sendEmail(
      data.email,
      "Next Pizza / Оплатите заказ #" + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl,
      }),
    );
  } catch (err) {
    console.log(err);
  }
}
