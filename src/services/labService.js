import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

export async function findAll(data) {
    return prisma.lab.findMany({
        skip: data["skip"],
        take: data["take"],
        where: {
            description: {
                startsWith: data["description"]
            },
            name: {
                startsWith: data["name"]
            },
            abbreviation: {
                startsWith: data["abbreviation"]
            },
            url_img: {
                startsWith: data["url_img"]
            }
        },
        include: {
            laboratory_expertise: true
        }
    })

}

export async function findById(id) {
    return prisma.lab.findUnique({
        where: {
            id: id,
        },
    });

}


export async function create(data) {

    const timestamp = new Date().toISOString()

    return prisma.lab.create({
        data: {
            description: data["description"],
            name: data["name"],
            abbreviation: data["abbreviation"],
            url_img: data["url_img"],
            laboratory_expertise:{
                create: {
                    start_date: timestamp,
                    area_of_expertise: {
                        connect: { description: "Mestre das batatas"},
                    }
                }
                
           
            }
        },
    })

}

export async function update(data) {
    return prisma.lab.update({
        where: {
            id: data["id"]
        },
        data: {
            description: data["description"],
            name: data["name"],
            abbreviation: data["abbreviation"],
            url_img: data["url_img"]
        },
    })

}

export async function deleteById(data) {
    return prisma.lab.delete({
        where: {
            id: data["id"]
        },
    })

}
