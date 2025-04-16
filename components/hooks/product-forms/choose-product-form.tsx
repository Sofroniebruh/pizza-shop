import Image from "next/image";
import { Product } from "@prisma/client";
import { Button } from "@/components/ui";

interface ProductFormProps {
  product: Product,
  onClickAdd: VoidFunction,
  totalPrice: number,
  loading: boolean,
}

export default function ProductForm({ product, onClickAdd, totalPrice, loading }: ProductFormProps) {
  return (
    <div className={"flex h-[500px]"}>
      <div className={"w-1/2 flex items-center justify-center"}>
        <Image width={350} height={300} src={product.imageUrl} alt={product.name}></Image>
      </div>
      <div className={"w-1/2 flex gap-6 flex-col bg-slate-50 p-6"}>
        <div>
          <h1 className={"text-2xl font-semibold mb-1"}>
            {product.name}
          </h1>
        </div>
        <Button loading={loading} onClick={onClickAdd} className={"cursor-pointer h-11"}><p>Add to cart for <span
          className={"font-bold"}>{totalPrice}&#8364;</span></p></Button>
      </div>
    </div>
  );
}