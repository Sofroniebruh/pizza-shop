import { cn } from "@/lib/utils";
import { ArrowUpDownIcon } from "lucide-react";

export default function SortPopup({ className }: { className?: string }) {
  return (
    <div
      className={cn("inline-flex gap-1 items-center rounded-2xl bg-gray-50 h-[52px] px-5 cursor-pointer", className)}>
      <ArrowUpDownIcon size={16}></ArrowUpDownIcon>
      <b>Sort by: <span className={"text-primary"}>Category</span></b>
    </div>
  );
}