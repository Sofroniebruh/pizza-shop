"use client";

import Common from "@/components/shared-components/common";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRightIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import HeaderInput from "@/components/shared-components/header-input";
import Link from "next/link";
import { CartDrawer } from "@/components/cart";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export default function HeaderElement({ hasSearch = true, hasCart = true, className }: Props) {
  const totalAmount = useCartStore(state => state.totalAmount);
  const loading = useCartStore(state => state.loading);
  const items = useCartStore(state => state.items);

  return (
    <header className={cn("border-b border-gray-200", className)}>
      <Common className="flex items-center justify-between py-8">
        <Link href="/">
          <div className={"flex items-center gap-4"}>
            <Image src={"/logo.png"} alt="Logo" width={32} height={32} />
            <div>
              <h1 className={"text-2xl uppercase font-black"}>PizzaStore</h1>
              <p className={"leading-3 text-sm text-gray-400"}>Best pizza in your city</p>
            </div>
          </div>
        </Link>
        {hasSearch && (
          <div className={"flex-1 mx-14"}>
            <HeaderInput />
          </div>
        )}
        <div className={"flex gap-4 items-center"}>
          <Button variant={"outline"}
                  className={"flex gap-1 cursor-pointer items-center"}><UserIcon></UserIcon>Login</Button>
          {
            hasCart && (
              <CartDrawer>
                <Button loading={loading} variant={"default"}
                        className={cn("group relative cursor-pointer", loading ? "w-[109px]" : "")}>
                  <b>{totalAmount} &#8364;</b>
                  <span className={"w-[1px] h-full bg-white/30 mx-3"}></span>
                  <div className={"flex items-center gap-1 transition duration-300 group-hover:opacity-0"}>
                    <ShoppingCartIcon className={"h-4 w-4"}></ShoppingCartIcon>
                    <b>{items.length}</b>
                  </div>
                  <ArrowRightIcon
                    className={"absolute w-5 right-5 transition -translate-x-2 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}></ArrowRightIcon>
                </Button>
              </CartDrawer>
            )
          }
        </div>
      </Common>
    </header>
  );
}