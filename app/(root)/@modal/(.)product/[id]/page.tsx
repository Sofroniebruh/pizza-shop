import {prismaClient} from "@prisma/prisma-client";
import Modal from "@/components/shared-components/modal";
import {notFound} from "next/navigation";

// @ts-ignore
export default async function ProductModal({params}) {
    const {id} = await params;

    const product = await prismaClient.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            variations: true
        }
    })

    if (!product) {
        return notFound();
    }

    return (
        <Modal product={product}></Modal>
    )
}