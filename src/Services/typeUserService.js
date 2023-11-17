import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function findAll() {
    console.log("test")
    return prisma.typeUser.findMany()
}

export async function findById(id)  {
    return prisma.typeUser.findUnique({
        where: {
            id: id,
        },
    });
}
