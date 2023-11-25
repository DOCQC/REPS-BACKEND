import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return await prisma.areaOfExpertise.findUnique({
        where: {
            id: id
        }
    })
}

export async function create(data) {
    return await prisma.areaOfExpertise.create({
       data: {
        description: "Mestre das batatas"
       }
 })
}
