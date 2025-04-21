import { Order } from "@prisma/client";

export async function GET_ORDER(id: string): Promise<Order> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/orders?id=${id}`,
    {
      method: "GET",
    },
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
