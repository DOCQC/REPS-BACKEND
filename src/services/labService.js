import { PrismaClient } from '@prisma/client'

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
            },
            laboratory_expertise: {
                some: {
                    area_of_expertise: {
                        description: data["area_of_expertise"]?.toUpperCase()?.trim()
                }
            }
            }
        },
        include: {
<<<<<<< HEAD
            laboratory_expertise: data["verbose"] ? {
                include: {
                    area_of_expertise:true
                }
            } : false
=======
            laboratory_expertise:true
>>>>>>> 7aa50f2 (fix(DOCB013): add CRUD (#21))
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

   const laboratoryExpertisesCreated = formatTolaboratoryExpertisesCreated(data.laboratory_expertise["connect_are_of_expertise"])
    return prisma.lab.create({
        data: {
            description: data["description"],
            name: data["name"],
            abbreviation: data["abbreviation"],
            url_img: data["url_img"],
            laboratory_expertise: {
                create: laboratoryExpertisesCreated
            }
        },
    })
}


export async function update(data) {

    const laboratoryExpertisesCreated = formatTolaboratoryExpertisesCreated(data.laboratory_expertise["connect_are_of_expertise"])
    const laboratoryExpertisesExcluded = formatTolaboratoryExpertisesExcluded(data.laboratory_expertise["exclude_area_of_expertise_by_id"])

    return prisma.lab.update({
        where: {
            id: data["id"]
        },
        data: {
            description: data["description"],
            name: data["name"],
            abbreviation: data["abbreviation"],
            url_img: data["url_img"],
            laboratory_expertise: {
                deleteMany: laboratoryExpertisesExcluded,
                create: laboratoryExpertisesCreated
            }

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

function formatTolaboratoryExpertisesCreated(dateArray) {
    const dataNow = new Date().toISOString()
    const laboratoryExpertisesCreated = dateArray?.map(element => {
        return {
            start_date: dataNow,
            area_of_expertise: {
                connect: { description: element },
            }
        }
    });

    return laboratoryExpertisesCreated
}


function formatTolaboratoryExpertisesExcluded(dateArray){
    const laboratoryExpertisesExcluded = dateArray?.map(element => {
        return {
            area_of_expertise_id:element
        }
    });

    return laboratoryExpertisesExcluded
}