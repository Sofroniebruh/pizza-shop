"use client"

import {Dialog} from "@/components/ui";
import {DialogContent, DialogTitle} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";
import ProductForm from "@/components/hooks/product-forms/choose-product-form";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {ProductWithRelations} from "@/types/prisma-types";
import PizzaForm from "@/components/hooks/product-forms/choose-pizza-form";

export default function Modal({product}: { product: ProductWithRelations }) {
    const router = useRouter()
    const isPizza = Boolean(product.variations[0].productType)
    const add = () => {

    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={router.back}>
            <VisuallyHidden><DialogTitle></DialogTitle></VisuallyHidden>
            <DialogContent className={"w-[1000px]"}>
                {
                    isPizza
                        ?
                        (<PizzaForm product={product} onClickAdd={add} totalPrice={11} textDetails={"Pizza Yummers!"}/>)
                        :
                        (<ProductForm product={product} onClickAdd={add} totalPrice={12}
                                      textDetails={"Yummers!"}/>)
                }

            </DialogContent>
        </Dialog>
    )
}