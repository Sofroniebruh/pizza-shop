import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title?: React.ReactNode,
  value?: string,
  className?: string,
}

export default function CheckOut({ title, value, className }: Props) {
  return (
    <div className={cn("flex my-4", className)}>
      <span className={"flex flex-1 text-lg text-neutral-500"}>
        {title}
        <div className={"flex-1 border-b border-dashed border-b-neutral-200 relative mx-2 -top-1"} />
      </span>
      <span className={"font-bold text-lg"}>{value} &#8364;</span>
    </div>
  );
};