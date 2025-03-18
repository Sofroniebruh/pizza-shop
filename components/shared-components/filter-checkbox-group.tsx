"use client"

import FilterCheckbox, {FilterCheckBoxInterface} from "@/components/shared-components/filter-checkbox";
import {Input, Skeleton} from "@/components/ui";
import React, {useState} from "react";
import {cn} from "@/lib/utils";

interface CheckBoxProps {
    title: string,
    items: FilterCheckBoxInterface[],
    searchInputPlaceholder?: string,
    loading?: boolean,
    limit?: number,
    defaultItems?: FilterCheckBoxInterface[],
    onChange?: (values: string) => void,
    defaultValue?: string[],
    selectedIds?: Set<string>,
    className?: string
}

export default function FilterCheckboxGroup(
    {
        title,
        items,
        defaultItems,
        limit,
        loading,
        searchInputPlaceholder,
        onChange,
        selectedIds,
        defaultValue,
        className
    }
    :
    CheckBoxProps
) {
    const [showAll, setShowAll] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(inputValue.toLowerCase())) : (items || defaultItems).slice(0, limit)
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    if (loading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>

                <div className={"flex flex-col gap-4"}>
                    {Array(limit).fill(0).map((_, index) => (
                        <div key={index} className="mb-4">
                            <Skeleton className="h-6 rounded-[8px]"/>
                        </div>
                    ))}
                    <Skeleton className={"w-28 h-6 mb-4 rounded-[8px]"}/>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={className}>
                <p className={"font-bold mb-3"}>{title}</p>
                {showAll &&
                    <div>
                        <Input onChange={onChangeInput} placeholder={searchInputPlaceholder}
                               className={"border-none bg-gray-50"}></Input>
                    </div>
                }
                <div className={"flex flex-col mt-5 gap-4 max-h-96 overflow-auto scrollbar"}>
                    {list && list.map((item, i) => (
                        <FilterCheckbox text={item.text}
                                        value={item.value}
                                        checked={selectedIds?.has(item.value)}
                                        endAdornment={item.endAdornment}
                                        name={"ingredients"}
                                        key={i}
                                        onCheckedChange={() => onChange?.(item.value)}
                        />
                    ))}
                </div>
                {limit && items.length > limit &&
                    <div className={cn(showAll ? "border-t mt-4" : "", "")}>
                        <button className={"mt-4 text-primary cursor-pointer"}
                                onClick={() => setShowAll(!showAll)}>{showAll ? "Hide" : "+ Show All"}</button>
                    </div>
                }
            </div>
        </>
    )

}