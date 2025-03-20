"use client"

import CardComponent from "@/components/shared-components/card-component";
import {useEffect, useRef, useState} from "react";
import {useCategoryId} from "@/store/category_id";
import useOnScreen from "@/components/hooks/on-screen-hook";
import {Product} from "@prisma/client";

interface CardsItems {
    items: any[],
    categoryId: number,
    name: string,
    className?: string
}

export default function CardsItems({items, categoryId, name, className}: CardsItems) {
    const setCategoryId = useCategoryId((state) => state.setActiveId);
    const intersectionRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(intersectionRef)

    useEffect(() => {
        if (isOnScreen) {
            setCategoryId(categoryId);
        }
    }, [categoryId, name, isOnScreen]);

    return (
        <div className={className} id={name} ref={intersectionRef}>
            <h1 className={"font-bold text-3xl mb-7"}>{name}</h1>
            <div className={"grid grid-cols-3 gap-16"}>
                {items.map((item, index) => (
                    <CardComponent key={index} id={item.id} title={item.name} image={item.imageUrl}
                                   price={item.variations[0].price} ingredients={item.ingredients}></CardComponent>
                ))}
            </div>
        </div>
    )
}