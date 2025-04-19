import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "@/components/ui";

interface Props {
  title?: React.ReactNode,
  value?: string,
  className?: string,
  loading: boolean,
}

export default function CheckOut({ title, value, className, loading }: Props) {
  return (
    <div className={cn("flex my-4", className)}>
      <span className={"flex flex-1 text-lg text-neutral-500"}>
        {title}
        <div className={"flex-1 border-b border-dashed border-b-neutral-200 relative mx-2 -top-1"} />
      </span>
      {loading ? (
          <Skeleton className={"h-[28px] min-w-[56px]"}></Skeleton>
        )
        : (
          <span className={"font-bold text-lg"}>{value} &#8364;</span>
        )}
    </div>
  );
};