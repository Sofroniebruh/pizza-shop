"use client";

import { useCartStore } from "@/store/cart";
import { ProductWithRelations } from "@/types/prisma-types";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import PizzaForm from "@/components/hooks/product-forms/choose-pizza-form";
import ProductForm from "@/components/hooks/product-forms/choose-product-form";

interface Props {
  product: ProductWithRelations;
  isModal?: boolean;
}

export const ProductFormComponent = ({ product, isModal }: Props) => {
  const addCartItem = useCartStore(state => state.addCartItem);
  const loading = useCartStore(state => state.loading);
  const firstItem = product.variations[0];
  const isPizza = Boolean(firstItem.productType);
  const router = useRouter();

  const onAddPizza = (variationId: number, ingredientsId: number[]) => {
    try {
      addCartItem({
        variationId,
        ingredientsId,
      });
      toast.success("Successfully added pizza to cart");
      if (isModal) {
        router.back();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding pizza to cart");
    }
  };

  const onAddProduct = () => {
    try {
      addCartItem({
        variationId: firstItem.id,
      });
      toast.success("Successfully added product to cart");
      if (isModal) {
        router.back();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding product to cart");
    }
  };

  if (isPizza) {
    return (
      <PizzaForm ingredients={product.ingredients} loading={loading} product={product} onClickAdd={onAddPizza}
                 variations={product.variations}
      />
    );
  } else {
    return (
      <ProductForm loading={loading} product={product} onClickAdd={onAddProduct} totalPrice={firstItem.price} />
    );
  }
};