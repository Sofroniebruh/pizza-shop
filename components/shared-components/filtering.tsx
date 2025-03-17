"use client"

import FilterCheckbox from "@/components/shared-components/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared-components/range-slider";
import FilterCheckboxGroup from "@/components/shared-components/filter-checkbox-group";
import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {API} from "@/lib/services/api_client";
import {toast} from "sonner";
import {useSet} from "react-use";

interface PriceProps {
    priceFrom: number,
    priceTo: number,
}

export default function Filtering({className}: { className?: string }) {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const validatedIngredients = ingredients.map((ingredient: Ingredient) => ({
        value: String(ingredient.id),
        text: ingredient.name
    }));
    const [selectedIds, {toggle}] = useSet(new Set<string>([]))
    const [prices, setPrices] = useState<PriceProps>({priceFrom: 0, priceTo: 30});

    const handlePriceChange = (name: keyof PriceProps, amount: number) => {
        setPrices({
            ...prices,
            [name]: amount
        })
    }

    useEffect(() => {
        setIsLoading(true)
        API.ingredients.GET_INGREDIENTS().then(
            (data) => {
                setIngredients(data);
                setIsLoading(false);
            }
        ).catch(error => toast("Something went wrong!"))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <div className={className}>
            <h3 className={"text-xl font-semibold pb-8"}>Filtering</h3>
            <div className={"flex flex-col gap-4"}>
                <FilterCheckbox text={"New in"} name={"NewIn"} value={"1"}></FilterCheckbox>
                <FilterCheckbox text={"Build yourself"} name={"Build"} value={"2"}></FilterCheckbox>
            </div>
            <div className={"border-t border-gray-200 mt-7 py-4"}>
                <p className={"mb-2 font-semibold"}>Price range:</p>
                <div className={"flex gap-3"}>
                    <Input type={"number"} placeholder={"0"} min={0} max={30} defaultValue={prices.priceFrom}
                           onChange={(e) => handlePriceChange("priceFrom", Number(e.target.value))}></Input>
                    <Input type={"number"} min={0} max={30} defaultValue={prices.priceTo}
                           onChange={(e) => handlePriceChange("priceTo", Number(e.target.value))}></Input>
                </div>
                <div className={"mt-4"}>
                    <RangeSlider min={0} max={30} step={1} value={[prices.priceFrom, prices.priceTo]}
                                 onValueChange={([from, to]) => setPrices({
                                     priceFrom: from,
                                     priceTo: to
                                 })}></RangeSlider>
                </div>
                <FilterCheckboxGroup
                    className={"mt-8"}
                    title={"Ingredients"}
                    items={validatedIngredients}
                    defaultItems={validatedIngredients.slice(0, 6)}
                    limit={6}
                    searchInputPlaceholder={"Search for ingredients"}
                    loading={isLoading}
                    onChange={(value: string) => toggle(value)}
                    selectedIds={selectedIds}
                />
            </div>
        </div>
    )
}