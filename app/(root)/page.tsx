import Common from "@/components/shared-components/common";
import TopBar from "@/components/shared-components/top-bar";
import Filtering from "@/components/shared-components/filtering";
import CardsItems from "@/components/shared-components/cards-items";
import { findPizzas, GetSearchParams } from "@/lib/find-pizzas";

export default async function Home({
                                     searchParams,
                                   }: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(await searchParams);

  return (
    <>
      <Common className={"mt-8"}>
        <h1 className={"text-3xl font-semibold"}>All Pizzas</h1>
      </Common>
      <TopBar categories={categories.filter((category) => category.products.length > 0)}></TopBar>
      <Common>
        <div className={"flex gap-[60px] my-10"}>
          <div className={"w-1/4"}>
            <Filtering />
          </div>
          <div className={"w-3/4 flex flex-col gap-10"}>
            {categories.map((category, index) => (
              category.products.length > 0 &&
              <CardsItems key={index} items={category.products} categoryId={category.id}
                          name={category.name} />
            ))}
          </div>
        </div>
      </Common>
    </>
  );
}
