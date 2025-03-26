import { Ingredient } from "@prisma/client";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

interface IngredientProps {
  ingredient: Ingredient,
  active: boolean
  onClick: () => void
  className?: string,
}

export default function IngredientItem({ ingredient, className, active, onClick }: IngredientProps) {
  return (
    <div
      className={cn(
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
        { "border border-primary": active },
        className,
      )}
      onClick={onClick}>
      {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
      <img width={110} height={110} src={ingredient.imageUrl} alt={ingredient.name} />
      <span className="text-xs mb-1">{ingredient.name}</span>
      <span className="font-bold">{ingredient.price}&#8364;</span>
    </div>
  );
}