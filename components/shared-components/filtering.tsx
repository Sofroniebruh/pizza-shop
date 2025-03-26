"use client";

import { Input } from "@/components/ui";
import { RangeSlider } from "@/components/shared-components/range-slider";
import FilterCheckboxGroup from "@/components/shared-components/filter-checkbox-group";
import { Ingredient } from "@prisma/client";
import { useIngredients } from "@/components/hooks/use-ingredients";
import { useFilters } from "@/components/hooks/use-filters";
import { useQueryFilters } from "@/components/hooks/use-query-filters";

export default function Filtering({ className }: { className?: string }) {
  const { ingredients, isLoading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const validatedIngredients = ingredients.map((ingredient: Ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));


  return (
    <div className={className}>
      <h3 className={"text-xl font-semibold pb-8"}>Filtering</h3>
      <div className={"flex flex-col gap-4"}>
        <FilterCheckboxGroup
          className={""}
          title={"Dough types"}
          items={[
            { text: "Thin", value: "1" },
            { text: "Traditional", value: "2" },
          ]}
          onChange={(value: string) => filters.setPizzaTypes(value)}
          selectedIds={filters.pizzaTypes}
        />
        <FilterCheckboxGroup
          className={""}
          title={"Sizes"}
          items={[
            { text: "20 cm", value: "20" },
            { text: "30 cm", value: "30" },
            { text: "40 cm", value: "40" },
          ]}
          onChange={(value: string) => filters.setPizzaSizes(value)}
          selectedIds={filters.pizzaSizes}
        />
      </div>
      <div className={"border-t border-gray-200 mt-7 py-4"}>
        <p className={"mb-2 font-semibold"}>Price range:</p>
        <div className={"flex gap-3"}>
          <Input type={"number"} placeholder={"0"} min={0} max={30}
                 value={filters.prices.priceFrom || 0}
                 onChange={(e) => filters.handlePriceChange("priceFrom", Number(e.target.value))}></Input>
          <Input type={"number"} min={0} max={30} value={filters.prices.priceTo || 30}
                 onChange={(e) => filters.handlePriceChange("priceTo", Number(e.target.value))}></Input>
        </div>
        <div className={"mt-4"}>
          <RangeSlider min={0} max={30} step={1}
                       value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 30]}
                       onValueChange={([from, to]) => filters.setPrices({
                         priceFrom: from,
                         priceTo: to,
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
          onChange={(value: string) => filters.setSelectedIngredients(value)}
          selectedIds={filters.selectedIngredients}
        />
      </div>
    </div>
  );
}