import {prismaClient} from "@/prisma/prisma-client";
import {hashSync} from "bcrypt";
import * as process from "node:process";

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
}

async function down() {
    prismaClient.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
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