import { PizzaSizesType, PizzaTypes, PizzaTypesType } from "@/types/prisma-types";
import { ICartItem } from "@/store/cart";

export const getCartItemDetails = (ingredients: ICartItem["extraIngredients"], pizzaType: PizzaTypesType, pizzaSize: PizzaSizesType): string => {
  const details = [];

  if (pizzaType && pizzaSize) {
    const pizzaTypeName = PizzaTypes[pizzaType];

    details.push(`${pizzaTypeName}, ${pizzaSize} cm`);
  }

  if (ingredients) {
    details.push(...ingredients.map(ingredient => ingredient.name));
  }

  return details.join(", ");
};