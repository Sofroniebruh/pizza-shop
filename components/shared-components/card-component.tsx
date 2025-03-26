import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";

interface CardProps {
  id: number,
  title: string,
  image: string,
  price: number,
  ingredients: Ingredient[],
  className?: string,
}

export default function CardComponent({ id, title, image, price, className, ingredients }: CardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <div className={"flex flex-col w-full"}>
          <div>
            <Image width={215} height={215} src={image} alt={"Logo"}></Image>
          </div>
          <div>
            <h1 className={"font-bold text-lg"}>{title}</h1>
            {
              ingredients != undefined &&
              <p
                className={"text-sm text-gray-400 mt-3"}>{String(ingredients.map((ingredient) => ingredient.name).join(", "))}</p>
            }
          </div>
        </div>
        <div className={"flex items-center justify-between w-full"}>
          <p>from <b>{price}&#8364;</b></p>
          <Button className={"cursor-pointer"} variant={"secondary"}>Add to Cart <PlusIcon
            className={"pl-2"}></PlusIcon></Button>
        </div>
      </div>
    </Link>
  );
}