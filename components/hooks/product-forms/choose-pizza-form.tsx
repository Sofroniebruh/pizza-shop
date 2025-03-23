"use client"

import {Product} from "@prisma/client";
import {Button} from "@/components/ui";
import {PizzaImage} from "@/components/shared-components/pizza-image";
import GroupVariants from "@/components/shared-components/group-variants";
import {PizzaObject, PizzaSizesType, PizzaTypesType} from "@/types/prisma-types";
import {useState} from "react";

interface ProductFormProps {
    product: Product,
    onClickAdd: VoidFunction,
    totalPrice: number,
    textDetails: string,
}

export default function PizzaForm({product, onClickAdd, totalPrice, textDetails}: ProductFormProps) {
    const [pizzaType, setPizzaType] = useState<PizzaTypesType>(1);
    const [pizzaSize, setPizzaSize] = useState<PizzaSizesType>(20);

    return (
        <div className={"flex h-[600px]"}>
            <PizzaImage imageUrl={product.imageUrl} size={pizzaSize}></PizzaImage>
            <div className={"w-1/2 flex gap-6 flex-col bg-slate-50 p-6"}>
                <div>
                    <h1 className={"text-2xl font-semibold mb-1"}>
                        {product.name}
                    </h1>
                    <p className={"font-medium text-gray-400"}>{textDetails}</p>
                </div>
                <GroupVariants items={PizzaObject} value={String(pizzaSize)}
                               onClick={(value) => setPizzaSize(Number(value) as PizzaSizesType)}></GroupVariants>
                <Button className={"cursor-pointer h-11"}><p>Add to cart for <span
                    className={"font-bold"}>{totalPrice}&#8364;</span></p></Button>
            </div>
        </div>
    )
}