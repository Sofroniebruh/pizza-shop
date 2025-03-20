import {prismaClient} from "@/prisma/prisma-client";
import {hashSync} from "bcrypt";
import * as process from "node:process";
import {_ingredients, categories, products} from "@prisma/constants";
import {Prisma} from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariation = ({
                                      productId,
                                      productType,
                                      size,
                                  }: {
    productId: number;
    productType?: 1 | 2;
    size?: 20 | 30 | 40;
}) => {
    return {
        productId,
        price: randomDecimalNumber(1, 30),
        productType,
        size,
    } as Prisma.VariationUncheckedCreateInput;
};

async function up() {
    await prismaClient.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                userRole: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                userRole: 'ADMIN',
            },
        ]
    })

    await prismaClient.category.createMany({
        data: categories
    })

    await prismaClient.ingredient.createMany({
        data: _ingredients
    })

    await prismaClient.product.createMany({
        data: products,
    });

    const pizza1 = await prismaClient.product.create({
        data: {
            name: "Pepperoni",
            imageUrl: "/pepperoni_pizza.webp",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(0, 5),
            }
        }
    })

    const pizza2 = await prismaClient.product.create({
        data: {
            name: "Cheesy Pizza",
            imageUrl: "/cheesy_pizza.webp",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(5, 10),
            }
        }
    })

    const pizza3 = await prismaClient.product.create({
        data: {
            name: "Meat Pizza",
            imageUrl: "/meat_pizza.webp",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(10, 40),
            }
        }
    })

    await prismaClient.variation.createMany({
        data: [
            //Pepperoni
            generateProductVariation({productId: pizza1.id, productType: 1, size: 20}),
            generateProductVariation({productId: pizza1.id, productType: 2, size: 30}),
            generateProductVariation({productId: pizza1.id, productType: 2, size: 40}),

            //Cheesy Pizza
            generateProductVariation({productId: pizza2.id, productType: 1, size: 20}),
            generateProductVariation({productId: pizza2.id, productType: 1, size: 30}),
            generateProductVariation({productId: pizza2.id, productType: 1, size: 40}),
            generateProductVariation({productId: pizza2.id, productType: 2, size: 20}),
            generateProductVariation({productId: pizza2.id, productType: 2, size: 30}),
            generateProductVariation({productId: pizza2.id, productType: 2, size: 40}),

            // Meat Pizza
            generateProductVariation({productId: pizza3.id, productType: 1, size: 20}),
            generateProductVariation({productId: pizza3.id, productType: 2, size: 30}),
            generateProductVariation({productId: pizza3.id, productType: 2, size: 40}),

            // Other
            generateProductVariation({productId: 1}),
            generateProductVariation({productId: 2}),
            generateProductVariation({productId: 3}),
            generateProductVariation({productId: 4}),
            generateProductVariation({productId: 5}),
            generateProductVariation({productId: 6}),
            generateProductVariation({productId: 7}),
            generateProductVariation({productId: 8}),
            generateProductVariation({productId: 9}),
            generateProductVariation({productId: 10}),
            generateProductVariation({productId: 11}),
            generateProductVariation({productId: 12}),
            generateProductVariation({productId: 13}),
            generateProductVariation({productId: 14}),
            generateProductVariation({productId: 15}),
            generateProductVariation({productId: 16}),
            generateProductVariation({productId: 17}),
        ],
    });

    await prismaClient.cart.createMany({
        data: [
            {
                userId: 1,
                totalPrice: 0,
                token: '11111',
            },
            {
                userId: 2,
                totalPrice: 0,
                token: '222222',
            },
        ],
    });

    await prismaClient.cartItem.create({
        data: {
            productVariationId: 1,
            cartId: 1,
            quantity: 2,
            extraIngredients: {
                connect: [{id: 1}, {id: 2}, {id: 3}],
            },
        },
    });
}

async function down() {
    await prismaClient.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prismaClient.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main().then(async () => {
        await prismaClient.$disconnect()
    }
).catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
})