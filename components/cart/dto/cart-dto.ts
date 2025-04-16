import { Cart, CartItem, Ingredient, Product, Variation } from "@prisma/client";

export type CartItemDTO = CartItem & {
  productVariation: Variation & ({
    product: Product,
  }),
  extraIngredients: Ingredient[],
}

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}

export interface CreateCartItemValues {
  variationId: number;
  ingredientsId?: number[];
}