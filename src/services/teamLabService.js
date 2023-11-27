import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

export async function findById(id) {
    return prisma.teamLab.findUnique({
        where: {
            id: id,
        },
    });

}

export async function create(data) {
    return prisma.teamLab.create({
        data: {
            accountable: data["accountable"],
            lab: {
                connect: {id: data["lab_id"]}
            }
        }
    })

}

export async function update(data) {
    return prisma.teamLab.update({
        where: {
            id: data["id"]
        },
        data: {
            accountable: data["accountable"],
            lab: {
                connect: {id: data["lab_id"]}
            }
        }
    })

}

export async function deleteById(data) {
    return prisma.teamLab.delete({
        where: {
            id: data["id"]
        },
    })

}
