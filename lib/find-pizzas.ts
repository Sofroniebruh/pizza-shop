import { prismaClient } from "@prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 30;

export const findPizzas = async (searchParams: GetSearchParams) => {
  const sizes = searchParams.sizes?.split(",").map(Number);
  const pizzaTypes = searchParams.pizzaTypes?.split(",").map(Number);
  const ingredientsIds = searchParams.ingredients?.split(",").map(Number);
  const minPrice = Number(searchParams.priceFrom?.trim()) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(searchParams.priceTo?.trim()) || DEFAULT_MAX_PRICE;

  return prismaClient.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsIds
            ? {
              some: {
                id: {
                  in: ingredientsIds,
                },
              },
            }
            : undefined,
          variations: {
            some: {
              size: {
                in: sizes,
              },
              productType: {
                in: pizzaTypes,
              },
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
          },
        },
        include: {
          ingredients: true,
          variations: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });
};