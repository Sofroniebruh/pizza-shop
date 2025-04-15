import { CartItemDTO } from "@/components/cart/dto/cart-dto";

export const calcCartTotalPrice = (data: CartItemDTO) => {
  const ingredientsPrice = Number(data.extraIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0).toFixed(2));

  return (ingredientsPrice + data.productVariation.price) * data.quantity;
};