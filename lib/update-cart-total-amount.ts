import { prismaClient } from "@prisma/prisma-client";
import { calcCartTotalPrice } from "@/lib/services/calc-cart-total-price";

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prismaClient.cart.findFirst({
    where: {
      token,
    },
    include: {
      cartItems: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productVariation: {
            include: {
              product: true,
            },
          },
          extraIngredients: true,
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  const updatedPrice = Number(userCart.cartItems.reduce((acc, item) => {
    return (acc + calcCartTotalPrice(item));
  }, 0).toFixed(2));
  
  return prismaClient.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalPrice: updatedPrice,
    },
    include: {
      cartItems: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productVariation: {
            include: {
              product: true,
            },
          },
          extraIngredients: true,
        },
      },
    },
  });
};