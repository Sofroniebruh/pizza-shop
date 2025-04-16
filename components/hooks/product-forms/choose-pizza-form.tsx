"use client";

import { Ingredient, Product, Variation } from "@prisma/client";
import { Button } from "@/components/ui";
import { PizzaImage } from "@/components/shared-components/pizza-image";
import GroupVariants from "@/components/shared-components/group-variants";
import { PizzaSizesType, PizzaTypeObject, PizzaTypes, PizzaTypesType } from "@/types/prisma-types";
import { useSet } from "react-use";
import IngredientItem from "@/components/shared-components/ingredient-item";
import { CalcTotalPizzaPrice } from "@/lib";
import { usePizzaOptions } from "@/components/hooks/usePizzaOptions";

interface ProductFormProps {
  product: Product,
  onClickAdd: (itemId: number, ingredients: number[]) => void,
  ingredients: Ingredient[],
  variations: Variation[],
  loading: boolean,
}

export default function PizzaForm({ product, onClickAdd, variations, ingredients, loading }: ProductFormProps) {
  const [chosenIngredients, { toggle: setIngredients }] = useSet(new Set<number>([]));
  const {
    pizzaType,
    pizzaSize,
    setPizzaSize,
    setPizzaType,
    availableSizes,
    currentItemId,
  } = usePizzaOptions(variations);
  const totalPrice = CalcTotalPizzaPrice(pizzaSize, pizzaType, variations, ingredients, chosenIngredients);

  const handleAdd = () => {
    if (currentItemId) {
      onClickAdd(currentItemId, Array.from(chosenIngredients));
    }
  };

  return (
    <div className={"flex h-[600px]"}>
      <PizzaImage imageUrl={product.imageUrl} size={pizzaSize}></PizzaImage>
      <div className={"w-[45%] flex gap-6 flex-col bg-slate-50 p-6"}>
        <div>
          <h1 className={"text-2xl font-semibold mb-1"}>
            {product.name}
          </h1>
          <p className={"font-medium text-gray-400"}>{pizzaSize} cm, {PizzaTypes[pizzaType]} Pizza</p>
        </div>
        <div className={"flex flex-col gap-3"}>
          <GroupVariants items={PizzaTypeObject} value={String(pizzaType)}
                         onClick={(value) => setPizzaType(Number(value) as PizzaTypesType)}></GroupVariants>
          <GroupVariants items={availableSizes} value={String(pizzaSize)}
                         onClick={(value) => setPizzaSize(Number(value) as PizzaSizesType)}></GroupVariants>
        </div>
        <div className={"h-[450px] overflow-auto bg-gray-50 py-5 rounded-2xl "}>
          <div className={"grid grid-cols-3 gap-3"}>
            {ingredients.map((ingredient, index) => (
              <IngredientItem key={index} ingredient={ingredient}
                              active={chosenIngredients.has(ingredient.id)}
                              onClick={() => setIngredients(ingredient.id)}></IngredientItem>
            ))}
          </div>
        </div>
        <Button loading={loading} onClick={handleAdd} className={"cursor-pointer h-11"}><p>Add to cart for <span
          className={"font-bold"}>{totalPrice}&#8364;</span></p></Button>
      </div>
    </div>
  );
}