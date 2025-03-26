import { cn } from "@/lib/utils";

export type Variant = {
  name: string,
  value: string,
  disabled?: boolean,
}

interface VariantProps {
  items: any[],
  value: Variant["value"],
  onClick: (variant: Variant["value"]) => void,
  isActive?: boolean,
}

export default function GroupVariants({ items, value, onClick, isActive }: VariantProps) {
  return (
    <div className={"flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none"}>
      {items.map((item, index) => (
        <button className={cn(
          "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
          {
            "bg-white shadow": item.value === value,
            "text-gray-500 opacity-50 pointer-events-none": item.disabled,
          },
        )} key={index} onClick={() => onClick(item.value)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}