import { prismaClient } from "@prisma/prisma-client";

export const findOrCreateCart = async (token: string) => {
  let userCart = await prismaClient.cart.findFirst({
    where: {
      token,
    },
  });

  if (!userCart) {
    userCart = await prismaClient.cart.create({
      data: {
        token,
      },
    });
  }

  return userCart;
};