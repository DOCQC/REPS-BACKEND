import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    errorFormat: 'minimal',
});

export async function findById(id) {
    return await prisma.quest.findUnique({
        where: {
            id: id
        }
    })
}

export async function create(data) {
    return await prisma.quest.create({
        data: {
            title: data["title"],
            description: data["description"],
            enterprise: {
                connect: {
                    id: data["enterprise_id"]
                }
            },
            area_of_expertise: {
                connect: {
                    id: data["area_of_expertise_id"]
                }
            },
        }
    })
}

export async function findAll(data) {

    return await prisma.quest.findMany(data)
}

export async function update(data) {

    return await prisma.quest.update({
        where: {
            id: Number(data["id"])
        },
        data: {
            title: data["title"],
            description: data["description"],
            enterprise: data["enterprise"],
            area_of_expertise: data["area_of_expertise"]
        }
    })
}

export async function deleteById(id) {
    return prisma.quest.delete({
        where: {
            id: id
        },
    })
}