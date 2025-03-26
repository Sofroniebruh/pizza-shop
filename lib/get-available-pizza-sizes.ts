import { PizzaObject, PizzaTypesType } from "@/types/prisma-types";
import { Variation } from "@prisma/client";
import { Variant } from "@/components/shared-components/group-variants";

export const GetAvailablePizzaSizes = (type: PizzaTypesType, items: Variation[]): Variant[] => {
  const availableItems = items.filter((item) => item.productType === type);

  return PizzaObject.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availableItems.some((pizza) => pizza.size === Number(item.value)),
  }));
};