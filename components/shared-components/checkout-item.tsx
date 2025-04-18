"use client";

import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartItemProps } from "@/components/cart/types/cart-types";
import Image from "next/image";
import { CartInfo } from "@/components/cart/cart-info";
import { CountButtonSection } from "@/components/cart";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CheckoutItem: React.FC<Props> = (
  {
    name,
    price,
    imageUrl,
    quantity,
    details,
    className,
    disabled,
    onClickCountButton,
    onClickRemove,
  }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className,
      )}>
      <div className="flex items-center gap-5 flex-1">
        <div className={"flex items-center"}>
          <Image width={60} height={60} src={imageUrl} alt={"pizza image"}></Image>
        </div>
        <CartInfo details={details} name={name}></CartInfo>
      </div>
      <div className={"flex items-center gap-3"}>
        <h2 className={"font-bold"}>{price.toFixed(2)} &#8364;</h2>
      </div>
      <div className="flex items-center gap-5 ml-20">
        <CountButtonSection value={quantity} onClick={onClickCountButton}></CountButtonSection>
        <button type="button" onClick={onClickRemove}>
          <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
};