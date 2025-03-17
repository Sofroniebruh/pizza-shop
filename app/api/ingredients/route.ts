import {prismaClient} from "@prisma/prisma-client";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    try {
        const data = await prismaClient.ingredient.findMany();

        return NextResponse.json(data, {status: 200});
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 500});
        }
    }
}