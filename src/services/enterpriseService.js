import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return await prisma.enterprise.findUnique({
        where: {
            id: id
        }
    })
}

