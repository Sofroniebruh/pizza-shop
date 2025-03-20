import {useRouter, useSearchParams} from "next/navigation";
import {Filters} from "@/components/hooks/use-filters";
import {useEffect, useMemo, useRef, useState} from "react";
import qs from "qs";
import {useDebouncedCallback} from "use-debounce";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.pizzaSizes),
        ingredients: Array.from(filters.selectedIngredients),
    };

    const memoizedFilters = useMemo(() => params, [params]);

    useEffect(() => {
        const query = qs.stringify(memoizedFilters, {arrayFormat: "comma"});

        if (searchParams.toString() === query) return;

        router.push(`?${query}`, {scroll: false});
    }, [memoizedFilters]);
};