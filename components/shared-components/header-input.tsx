"use client"

import {SearchIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {useClickOutside} from "@reactuses/core";
import {cn} from "@/lib/utils";
import {API} from "@/lib/services/api_client";
import {Product} from "@prisma/client";
import {toast} from "sonner"
import Image from "next/image";
import Link from "next/link";

export default function HeaderInput() {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef(null);
    const [searchParams, setSearchParams] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState(false);

    useClickOutside(ref, () => {
        setIsFocused(false);
    })

    useEffect(() => {
        setError(false)
        console.log(API.products.GET_PRODUCTS(searchParams))
        API.products.GET_PRODUCTS(searchParams).then((data) => {
                setProducts(data);
            }
        ).catch(error => {
            setError(true)
        })
    }, [searchParams])

    console.log("Products goida: " + products)

    const handleClick = () => {
        setIsFocused(false);
        setProducts([]);
        setSearchParams("");
    }

    return (
        <>
            {isFocused && <div className={"fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-40"}/>}
            {error && toast("Error fetching products.")}

            <div
                ref={ref}
                className="relative w-full flex gap-3 items-center rounded-2xl border border-gray-200 h-10 z-50 bg-white"
            >
                <SearchIcon className="text-gray-400 ml-4"/>
                <input
                    className="border-0 outline-none w-full bg-transparent z-50"
                    placeholder="Search..."
                    onFocus={() => setIsFocused(true)}
                    onChange={e => setSearchParams(e.currentTarget.value)}
                />
                <div
                    className={cn(
                        'absolute w-full bg-white rounded-2xl py-2 px-4 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-50',
                        isFocused && products.length > 0 && 'visible opacity-100 top-12',
                    )}>
                    {Array.isArray(products) && products.length > 0 && (
                        products.map((product: Product, index) => (
                            <Link href={`/product/${product.id}`} key={index} onClick={handleClick}>
                                <div className={"flex gap-3 items-center hover:bg-primary"}>
                                    <Image src={product.imageUrl} width={44} height={44} alt={"product_image"}></Image>
                                    <p className={"text-md"}>{product.name}</p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>

        </>
    )
}