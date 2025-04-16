import { CartDTO, CreateCartItemValues } from "@/components/cart/dto/cart-dto";

export async function GET_CART_ITEMS(): Promise<CartDTO> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart`, {
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function UPDATE_CART_QUANTITY(itemId: number, quantity: number): Promise<CartDTO> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart/${itemId}`, {
    method: "PATCH",
    body: JSON.stringify({ quantity: quantity }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function DELETE_CART_ITEM(itemId: number): Promise<CartDTO> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart/${itemId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function CREATE_CART_ITEM(data: CreateCartItemValues): Promise<CartDTO> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}