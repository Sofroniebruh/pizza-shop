import { useRouter, useSearchParams } from "next/navigation";
import { Filters } from "@/components/hooks/use-filters";
import { useEffect, useMemo } from "react";
import qs from "qs";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const memoizedFilters = useMemo(() => ({
    ...filters.prices,
    pizzaTypes: Array.from(filters.pizzaTypes),
    sizes: Array.from(filters.pizzaSizes),
    ingredients: Array.from(filters.selectedIngredients),
  }), [
    filters.prices.priceFrom,
    filters.prices.priceTo,
    filters.pizzaSizes,
    filters.pizzaTypes,
    filters.selectedIngredients,
  ]);

  useEffect(() => {
    const query = qs.stringify(memoizedFilters, { arrayFormat: "comma" });

    if (searchParams.toString() === query) return;

    router.push(`?${query}`, { scroll: false });
  }, [memoizedFilters]);
};