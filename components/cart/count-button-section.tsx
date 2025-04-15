"use client";

import { CountButton } from "@/components/cart/count-button";

interface CountButtonSectionProps {
  value: number;
  onClick?: (type: "plus" | "minus") => void;
}

export const CountButtonSection = ({ value = 1, onClick }: CountButtonSectionProps) => {
  return (
    <div className={"inline-flex items-center justify-between gap-3"}>
      <CountButton value={value} disabled={value == 1} onClick={() => onClick!("minus")} type={"minus"}></CountButton>
      <b>{value}</b>
      <CountButton value={value} onClick={() => onClick!("plus")} type="plus" />
    </div>
  );
};