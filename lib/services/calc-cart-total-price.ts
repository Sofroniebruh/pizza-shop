import { CartItemDTO } from "@/components/cart/dto/cart-dto";

export const calcCartTotalPrice = (data: CartItemDTO) => {
  const ingredientsPrice = data.extraIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  return (ingredientsPrice + data.productVariation.price) * data.quantity;
};