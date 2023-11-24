import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return await prisma.areaOfExpertise.findUnique({
        where: {
            id: id
        }
    })
}
