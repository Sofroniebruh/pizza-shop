"use client";

import Image from "next/image";
import { CartItemProps } from "@/components/cart/types/cart-types";
import { CartInfo } from "@/components/cart/cart-info";
import { CountButtonSection } from "@/components/cart/count-button-section";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  onClickUpdateQuantity?: (type: "plus" | "minus") => void;
  removeCartItem?: () => void;
}

export const CartDrawerItem = ({
                                 id,
                                 imageUrl,
                                 name,
                                 details,
                                 price,
                                 quantity,
                                 onClickUpdateQuantity,
                                 removeCartItem,
                               }: Props) => {
  return (
    <div className={"flex bg-white p-5 gap-6"}>
      <div className={"flex items-center"}>
        <Image width={60} height={60} src={imageUrl} alt={"pizza image"}></Image>
      </div>
      <div className={"flex-1"}>
        <CartInfo details={details} name={name}></CartInfo>
        <hr className={"my-3"} />
        <div className={"flex items-center justify-between"}>
          <CountButtonSection value={quantity} onClick={onClickUpdateQuantity}></CountButtonSection>
          <div className={"flex items-center gap-3"}>
            <h2 className={"font-bold"}>{price.toFixed(2)} &#8364;</h2>
            <Trash2Icon className={"text-gray-400 cursor-pointer hover:text-gray-600"} size={16}
                        onClick={removeCartItem}></Trash2Icon>
          </div>
        </div>
      </div>
    </div>
  );
};