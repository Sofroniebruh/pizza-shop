import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@prisma/prisma-client";
import { updateCartTotalAmount } from "@/lib";

// @ts-ignore
export async function PATCH(req: NextRequest, { params }: Promise<{ params: { id: string } }>) {
  try {
    const { id } = await params;
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Error retrieving the token" }, { status: 500 });
    }

    const cartItem = await prismaClient.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Error retrieving the cart item" }, { status: 500 });
    }

    await prismaClient.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error(error);
    return NextResponse.json({ error: "Error updating the cart" }, { status: 500 });
  }
}

// @ts-ignore
export async function DELETE(req: NextRequest, { params }: Promise<{ params: { id: string } }>) {
  try {
    const { id } = await params;
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Error retrieving the token" }, { status: 500 });
    }

    const cartItem = await prismaClient.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Error retrieving the cart item" });
    }

    await prismaClient.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error(error);
    return NextResponse.json({ error: "Error updating the cart" }, { status: 500 });
  }
}