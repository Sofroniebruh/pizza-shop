import { prismaClient } from "@prisma/prisma-client";
import { notFound } from "next/navigation";
import { ProductFormComponent } from "@/components/shared-components/product-form";
import Common from "@/components/shared-components/common";

// @ts-ignore
export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await prismaClient.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              variations: true,
            },
          },
        },
      },
      variations: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Common>
      <div className={"mt-10"}>
        <ProductFormComponent product={product}></ProductFormComponent>
      </div>
    </Common>
  );
}
