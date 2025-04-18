"use client";

import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { CartDrawerItem } from "@/components/cart/cart-drawer-item";
import { getCartItemDetails } from "@/lib";
import { PizzaSizesType, PizzaTypesType } from "@/types/prisma-types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CartDrawer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const fetchCartItems = useCartStore(state => state.fetchCartItems);
  const updateItemQuantity = useCartStore(state => state.updateItemQuantity);
  const removeCartItem = useCartStore(state => state.removeCartItem);
  const totalAmount = useCartStore(state => state.totalAmount);
  const items = useCartStore(state => state.items);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickUpdateButton = (id: number, quantity: number, type: "plus" | "minus") => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className={"flex flex-col w-full justify-between pb-0 bg-[#F4F1EE]"}>
        <div className={cn("flex flex-col h-full", !items.length && "justify-center")}>
          <SheetHeader>
            <SheetTitle>
              {items.length > 0 && (

                <p>You have total of <span>{items.length} {items.length == 1 ? "product" : "products"}</span> in your
                  cart.
                </p>
              )}
            </SheetTitle>
          </SheetHeader>

          {!items.length && (
            <div className={"flex flex-col items-center justify-center w-72 mx-auto"}>
              <Image src={"/images-for-interaction/empty-box.png"} alt={"Empty cart"} width={120}
                     height={120}></Image>
              <h1 className={"text-xl font-semibold"}>Your cart is empty</h1>
              <SheetClose>
                <div
                  className={"w-56 h-12 text-base cursor-pointer mt-3 flex items-center bg-primary justify-center text-white rounded-2xl active:translate-y-[1px]"}>
                  <ArrowLeftIcon className={"w-5 mr-2"}></ArrowLeftIcon>
                  <p>Continue shopping</p>
                </div>
              </SheetClose>
            </div>
          )}

          {items.length > 0 && (
            <>
              <div className={"overflow-auto flex flex-col gap-2"}>
                {
                  items.map((item, index) => (
                    <CartDrawerItem key={index} id={item.id} imageUrl={item.imageUrl}
                                    details={item.productType && item.size ? getCartItemDetails(item.extraIngredients, item.productType as PizzaTypesType, item.size as PizzaSizesType) : ""}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClickUpdateQuantity={(type) => onClickUpdateButton(item.id, item.quantity, type)}
                                    removeCartItem={() => removeCartItem(item.id)}
                    />
                  ))
                }
              </div>
              <SheetFooter className={"mx-0 bg-white p-8"}>
                <div className={"w-full"}>
                  <div className={"flex mb-4"}>
              <span className={"flex flex-1 text-lg text-neutral-500"}>
                Total
                <div className={"flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"}></div>
              </span>
                    <span className={"font-bold text-lg"}>
                {totalAmount} &#8364;
              </span>
                  </div>
                  <Link href={"#"}>
                    <Button type={"submit"} className={"w-full h-12 text-base"}>
                      Checkout <ArrowRightIcon className={"w-5 ml-2"} />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};