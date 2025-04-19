import { WhiteBlock } from "@/components/shared-components/white-box";
import { CheckoutItem } from "@/components/shared-components/checkout-item";
import { getCartItemDetails } from "@/lib";
import { PizzaSizesType, PizzaTypesType } from "@/types/prisma-types";
import { ICartItem } from "@/store/cart";

interface Props {
  items: ICartItem[];
  onClickCountButton: (id: number, quantity: number, type: "plus" | "minus") => void;
  removeCartItem: (id: number) => void;
}

export const CartForm = ({ items, removeCartItem, onClickCountButton }: Props) => {
  return (
    <WhiteBlock title={"1. Cart"}>
      <div className={"flex flex-col gap-5"}>
        {items.map((item) => (
          <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} details={
            item.size && item.productType ? getCartItemDetails(item.extraIngredients, item.productType as PizzaTypesType, item.size as PizzaSizesType) : ""
          } name={item.name} price={item.price}
                        quantity={item.quantity}
                        onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                        onClickRemove={() => removeCartItem(item.id)}></CheckoutItem>
        ))}
      </div>
    </WhiteBlock>
  );
};