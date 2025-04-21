import { prismaClient } from "@prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    console.log(id);

    if (!id) {
      return NextResponse.json(
        { error: "Missing 'id' in query params" },
        { status: 400 },
      );
    }

    const order = await prismaClient.order.findFirst({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: error }, { status: 500 });
  }
}
