import React from "react";
import { Checkbox } from "@/components/ui";

export interface FilterCheckBoxInterface {
  text: string,
  value: string,
  endAdornment?: React.ReactNode,
  onCheckedChange?: () => void,
  checked?: boolean,
  name?: string,
}

export default function FilterCheckbox({
                                         text,
                                         value,
                                         endAdornment,
                                         onCheckedChange,
                                         checked,
                                         name,
                                       }: FilterCheckBoxInterface) {
  return (
    <div className={"flex items-center gap-2"}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${name}-${String(value)}`}
        checked={checked}>
      </Checkbox>
      <label htmlFor={`checkbox-${name}-${String(value)}`} className={"leading-none cursor-pointer"}>
        {text}
      </label>
    </div>
  );
}