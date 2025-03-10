"use client"

import CardComponent from "@/components/shared-components/card-component";
import {useEffect, useRef, useState} from "react";
import {useCategoryId} from "@/store/category_id";
import useOnScreen from "@/components/hooks/on-screen-hook";

interface CardsItems {
    items: any[],
    categoryId: number,
    title: string,
    className?: string
}

export default function CardsItems({items, categoryId, title, className}: CardsItems) {
    const setCategoryId = useCategoryId((state) => state.setActiveId);
    const intersectionRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(intersectionRef)

    useEffect(() => {
        if (isOnScreen) {
            setCategoryId(categoryId);
            console.log(categoryId)
        }
    }, [categoryId, title, isOnScreen]);

    return (
        <div className={className} ref={intersectionRef}>
            <h1 className={"font-bold text-3xl mb-10"}>{title}</h1>
            <div className={"grid grid-cols-3 gap-10"}>
                {items.map((item: any, index) => (
                    <CardComponent key={index} id={item.id} title={item.name} image={item.image}
                                   price={item.price}></CardComponent>
                ))}
            </div>
        </div>
    )
}