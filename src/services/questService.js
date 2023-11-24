import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return prisma.quest.findUnique({
        where: {
            id: id
        }
    })
}

export async function create(data) {
    return prisma.quest.create({
        data
    })

}