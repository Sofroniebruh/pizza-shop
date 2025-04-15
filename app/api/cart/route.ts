import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@prisma/prisma-client";

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