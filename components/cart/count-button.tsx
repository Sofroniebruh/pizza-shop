"use client";

import { Button } from "@/components/ui";
import { MinusIcon, PlusIcon } from "lucide-react";

interface CountButtonProps {
  value: number,
  onClick: () => void,
  disabled?: boolean,
  type: "plus" | "minus";
}

export const CountButton = ({ value, onClick, disabled, type }: CountButtonProps) => {
  return (
    <Button variant={"outline"}
            className={"p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400 w-[30px] h-[30px] rounded-[10px]"}
            disabled={disabled} onClick={onClick}>
      {type == "plus"
        ?
        (
          <PlusIcon className={"h-4"}></PlusIcon>
        )
        :
        (
          <MinusIcon className={"h-4"}></MinusIcon>
        )}
    </Button>
  );
};