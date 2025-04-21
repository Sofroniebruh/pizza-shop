"use server";

import { CheckoutFormSchema } from "@/components/form/schema";
import { cookies } from "next/headers";
import { prismaClient } from "@prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { API } from "@/lib/services/api_client";

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

    const response = (await API.checkout.CHECKOUT(
      order.totalPrice,
      order.id,
    )) as {
      url: string;
      id: string;
    };

    await prismaClient.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: response.id,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function cancelOrder(id: string) {
  try {
    await prismaClient.order.update({
      where: {
        id: Number(id),
      },
      data: {
        status: OrderStatus.CANCELED,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
