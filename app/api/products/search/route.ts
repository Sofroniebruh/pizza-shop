import {NextRequest, NextResponse} from "next/server";
import {prismaClient} from "@prisma/prisma-client";

export async function GET(req: NextRequest) {
    try {
        const query = req.nextUrl.searchParams.get("name") || ""
        const data = await prismaClient.product.findMany(
            {
                where: {
                    name: {
                        contains: query,
                        mode: "insensitive"
                    }
                },
                take: 5
            }
        )

        return NextResponse.json(data, {status: 200})
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }
    }
}