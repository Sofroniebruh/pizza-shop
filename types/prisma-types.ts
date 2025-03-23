import {Ingredient, Product, Variation} from "@prisma/client";

export type ProductWithRelations = Product & { variations: Variation[]; ingredients: Ingredient[] };

export const PizzaSizes = {
    20: "Small",
    30: "Medium",
    40: "Large",
} as const;

export const PizzaTypes = {
    1: "Thin",
    2: "Traditional",
}

export const PizzaObject = Object.entries(PizzaSizes).map(([value, name]) =>
    ({name, value}))

export type PizzaSizesType = keyof typeof PizzaSizes;
export type PizzaTypesType = keyof typeof PizzaTypes;