"use client";

import { Dialog } from "@/components/ui";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/types/prisma-types";
import { ProductFormComponent } from "@/components/shared-components/product-form";

export default function Modal({ product }: { product: ProductWithRelations }) {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={router.back}>
      <VisuallyHidden><DialogTitle></DialogTitle></VisuallyHidden>
      <DialogContent className={"w-[1100px]"}>
        <ProductFormComponent product={product} isModal={true}></ProductFormComponent>
      </DialogContent>
    </Dialog>
  );
}