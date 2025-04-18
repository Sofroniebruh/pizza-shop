import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@prisma/prisma-client";
import * as crypto from "node:crypto";
import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { CreateCartItemValues } from "@/components/cart/dto/cart-dto";
import { updateCartTotalAmount } from "@/lib";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const items = await prismaClient.cart.findFirst({
      where: {
        token: token,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productVariation: {
              include: {
                product: true,
              },
            },
            extraIngredients: true,
          },
        },
      },
    });

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);
    const data = (await req.json()) as CreateCartItemValues;

    const matchingItems = await prismaClient.cartItem.findMany({
      where: {
        cartId: userCart.id,
        productVariationId: data.variationId,
      },
      include: {
        extraIngredients: true,
      },
    });

    const findCartItem = matchingItems.find((item) => {
      const existingIds = item.extraIngredients.map((ingredient) => ingredient.id).sort();
      const incomingIds = [...data.ingredientsId ?? []].sort();

      return (
        existingIds.length === incomingIds.length &&
        existingIds.every((id, index) => id === incomingIds[index])
      );
    });

    if (findCartItem) {
      await prismaClient.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    }

    if (!findCartItem) {
      await prismaClient.cartItem.create({
        data: {
          cartId: userCart.id,
          productVariationId: data.variationId,
          quantity: 1,
          extraIngredients: {
            connect: data.ingredientsId?.map((id) => ({ id })),
          },
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updatedUserCart);

    resp.cookies.set("cartToken", token);

    return resp;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: error }, { status: 500 });
  }
}