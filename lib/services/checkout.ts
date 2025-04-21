export async function CHECKOUT(amount: number, id: number): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/create-checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount, orderId: id }),
    },
  );

  if (!response.ok) {
    console.error("Checkout failed:", response.status);
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function CHECK_PAYMENT_STATUS(sessionId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/checkout-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionId }),
    },
  );

  if (!response.ok) {
    console.error("Checkout failed:", response.status);
    throw new Error(response.statusText);
  }

  return response.json();
}
