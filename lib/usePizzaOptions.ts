import { useEffect, useState } from "react";
import { PizzaSizesType, PizzaTypesType } from "@/types/prisma-types";
import { GetAvailablePizzaSizes } from "@/lib/get-available-pizza-sizes";
import { Variation } from "@prisma/client";

export const usePizzaOptions = (availablePizza: Variation[]) => {
  const [pizzaType, setPizzaType] = useState<PizzaTypesType>(1);
  const [pizzaSize, setPizzaSize] = useState<PizzaSizesType>(20);
  const availableSizes = GetAvailablePizzaSizes(pizzaType, availablePizza);

  useEffect(() => {
    const isAvailableSize = availableSizes.find((item) => Number(item.value) == pizzaSize && !item.disabled);
    const availableSize = availableSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setPizzaSize(Number(availableSize.value) as PizzaSizesType);
    }
  }, [pizzaType]);

  return {
    pizzaType,
    setPizzaType,
    pizzaSize,
    setPizzaSize,
    availableSizes,
  };
};