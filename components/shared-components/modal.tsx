"use client";

import { Dialog } from "@/components/ui";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/hooks/product-forms/choose-product-form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/types/prisma-types";
import PizzaForm from "@/components/hooks/product-forms/choose-pizza-form";
import { useCartStore } from "@/store/cart";
import { toast } from "react-hot-toast";

export default function Modal({ product }: { product: ProductWithRelations }) {
  const router = useRouter();
  const firstItem = product.variations[0];
  const isPizza = Boolean(firstItem.productType);
  const addCartItem = useCartStore(state => state.addCartItem);
  const loading = useCartStore(state => state.loading);

  const onAddPizza = (variationId: number, ingredientsId: number[]) => {
    try {
      addCartItem({
        variationId,
        ingredientsId,
      });
      toast.success("Successfully added pizza to cart");
      router.back();
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
      router.back();
    } catch (error) {
      console.error(error);
      toast.error("Error adding product to cart");
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={router.back}>
      <VisuallyHidden><DialogTitle></DialogTitle></VisuallyHidden>
      <DialogContent className={"w-[1100px]"}>
        {
          isPizza
            ?
            (<PizzaForm ingredients={product.ingredients} loading={loading} product={product} onClickAdd={onAddPizza}
                        variations={product.variations}
            />)
            :
            (<ProductForm loading={loading} product={product} onClickAdd={onAddProduct} totalPrice={firstItem.price} />)
        }

      </DialogContent>
    </Dialog>
  );
}