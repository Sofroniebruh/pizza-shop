"use client"

import FilterCheckbox, {FilterCheckBoxInterface} from "@/components/shared-components/filter-checkbox";
import {Button, Input} from "@/components/ui";
import React, {useState} from "react";
import {cn} from "@/lib/utils";

interface CheckBoxProps {
    title: string,
    items: FilterCheckBoxInterface[],
    defaultItems: FilterCheckBoxInterface[],
    limit: number,
    searchInputPlaceholder: string,
    onChange?: (values: string[]) => void,
    defaultValue?: string[]
    className?: string
}

export default function FilterCheckboxGroup(
    {
        title,
        items,
        defaultItems,
        limit,
        searchInputPlaceholder,
        onChange,
        defaultValue,
        className
    }
    :
    CheckBoxProps
) {
    const [showAll, setShowAll] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(inputValue.toLowerCase())) : defaultItems.slice(0, limit)
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={className}>
            <p className={"font-bold mb-3"}>{title}</p>
            {showAll &&
                <div>
                    <Input onChange={onChangeInput} placeholder={searchInputPlaceholder}
                           className={"border-none bg-gray-50"}></Input>
                </div>
            }
            <div className={"flex flex-col mt-5 gap-4 max-h-96 overflow-auto scrollbar"}>
                {list.map((item, i) => (
                    <FilterCheckbox text={item.text}
                                    value={item.value}
                                    checked={false}
                                    endAdornment={item.endAdornment}
                                    key={i}
                                    onCheckedChange={item.onCheckedChange}
                    />
                ))}
            </div>
            {items.length > limit &&
                <div className={cn(showAll ? "border-t mt-4" : "", "")}>
                    <button className={"mt-4 text-primary cursor-pointer"}
                            onClick={() => setShowAll(!showAll)}>{showAll ? "Hide" : "+ Show All"}</button>
                </div>
            }
        </div>
    )

}