import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function findAll(data) {
    return prisma.areaOfExpertise.findMany(data)
}

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
            description: data["description"].toUpperCase().trim()
        }
    })
}

export async function update(data) {
    return prisma.areaOfExpertise.update({
        where: {
            id: Number(data["id"])
        },
        data: {
            description: data["description"]
        }
    })
}

export async function deleteById(id) {
    return prisma.areaOfExpertise.delete({
        where: {
            id: Number(id)
        },
    })
}

export async function update(data) {
    return prisma.areaOfExpertise.update({
        where: {
            id: Number(data["id"])
        },
        data: {
            description: data["description"]
           }
    })
}

export async function deleteById(id) {
    return prisma.areaOfExpertise.delete({
        where: {
            id: Number(id)
        },
    })
}
