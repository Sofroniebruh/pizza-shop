import { Product } from "@prisma/client";

export async function GET_PRODUCTS(query: string): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/products/search?name=${query}`, {
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}