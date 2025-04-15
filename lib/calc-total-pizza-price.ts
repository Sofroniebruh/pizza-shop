import { PizzaSizesType, PizzaTypesType } from "@/types/prisma-types";
import { Ingredient, Variation } from "@prisma/client";

export const CalcTotalPizzaPrice = (
  size: PizzaSizesType,
  type: PizzaTypesType,
  variations: Variation[],
  ingredients: Ingredient[],
  chosenIngredients: Set<number>,
) => {
  const pizzaPrice = variations.find((variation) =>
    variation.productType === type && variation.size == size)?.price || 0;

  const chicken = ingredients.filter((ingredient) => ingredient.id == 5);

  const totalIngredientsPrice = Number(ingredients.filter((ingredient) =>
    (chosenIngredients.has(ingredient.id)))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)
    .toFixed(2));

  return pizzaPrice + totalIngredientsPrice;
};