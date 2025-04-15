import { Ingredient } from "@prisma/client";

export async function GET_INGREDIENTS(): Promise<Ingredient[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/ingredients`, {
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}