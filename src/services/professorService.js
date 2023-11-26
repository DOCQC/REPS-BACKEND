import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()
//TODO CREATE e UPDATE em professorService
export async function findAll(data) {
    return prisma.professor.findMany(data)

}

export async function findById(id) {
    return prisma.professor.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
            team_lab: true
        }
    });

}

export async function create(data) {
    const dict = {
        id: data[""],
        name: data[""],
        team_lab: data[""],
        user: data[""],
        siape: data["siape"]
    }
    return prisma.professor.create({
        data: {

        },
    })

}

export async function update(data) {
    return prisma.professor.update({
        where: {
            id: data["id"]
        },
        data: {

        },
    })

}

export async function deleteById(data) {
    return prisma.professor.delete({
        where: {
            id: data["id"]
        },
    })

}