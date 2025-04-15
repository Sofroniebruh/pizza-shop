import { CartDTO } from "@/components/cart/dto/cart-dto";

export async function GET_CART_ITEMS(): Promise<CartDTO> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart`, {
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}