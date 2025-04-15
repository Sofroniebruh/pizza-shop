"use client";

import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRightIcon } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { CartDrawerItem } from "@/components/cart/cart-drawer-item";
import { getCartItemDetails } from "@/lib";
import { PizzaSizesType, PizzaTypesType } from "@/types/prisma-types";

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
        <SheetHeader>
          <SheetTitle>
            <p>You have total of <span>{items.length} {items.length == 1 ? "product" : "products"}</span> in your cart.
            </p>
          </SheetTitle>
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  )
    ;
};