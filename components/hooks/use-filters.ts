import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number,
  priceTo?: number,
}

export interface Filters {
  prices: PriceProps,
  selectedIngredients: Set<string>,
  pizzaSizes: Set<string>,
  pizzaTypes: Set<string>,
}

export const useFilters = () => {
  const searchParams = useSearchParams();
  const [selectedIngredients, { toggle: toggleSelectedIngredients }] = useSet(new Set<string>(searchParams.get("ingredients") ? searchParams.get("ingredients")?.split(",") : []));

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const [pizzaSizes, { toggle: togglePizzaSizes }] = useSet(new Set<string>(
    searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : [],
  ));

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(
    searchParams.get("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : [],
  ));

  const handlePriceChange = (name: keyof PriceProps, amount: number) => {
    setPrices({
      ...prices,
      [name]: amount,
    });
  };

  return useMemo(() => ({
    pizzaSizes,
    pizzaTypes,
    prices,
    selectedIngredients,
    setPrices,
    setSelectedIngredients: toggleSelectedIngredients,
    setPizzaSizes: togglePizzaSizes,
    setPizzaTypes: togglePizzaTypes,
    handlePriceChange,
  }), [pizzaSizes, pizzaTypes, prices, selectedIngredients]);
};