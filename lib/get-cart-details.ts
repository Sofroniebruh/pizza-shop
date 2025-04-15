import { CartDTO } from "@/components/cart/dto/cart-dto";
import { ICartItem } from "@/store/cart";
import { calcCartTotalPrice } from "@/lib/services/calc-cart-total-price";

interface ReturnCartProps {
  items: ICartItem[],
  totalAmount: number,
}

export const getCartDetails = (data: CartDTO): ReturnCartProps => {
  const items = data.cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      imageUrl: item.productVariation.product.imageUrl,
      name: item.productVariation.product.name,
      price: calcCartTotalPrice(item),
      size: item.productVariation.size,
      productType: item.productVariation.productType,
      extraIngredients: item.extraIngredients.map((ingredient) => ({
        name: ingredient.name,
        price: ingredient.price,
      })),
    }),
  ) as ICartItem[];

  return {
    items,
    totalAmount: data.totalPrice,
  };
};