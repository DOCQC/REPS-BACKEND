import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

export async function findAll(data) {
    return prisma.userType.findMany({
        skip: data["skip"],
        take: data["take"],
        where: {
            description: {
                startsWith: data["description"]
            },
        },
    })

}

export async function findById(id) {
    return prisma.userType.findUnique({
        where: {
            id: id,
        },
    });

}

export async function create(data) {
    return prisma.userType.create({
        data: {
            description: data["description"]
        },
    })

}

export async function update(id, data) {
    return prisma.userType.update({
        where: {
            id: id
        },
        data: {
            description: data["description"],
        },
    })

}

export async function deleteById(id) {
    return prisma.userType.delete({
        where: {
            id: id
        },
    })

}
