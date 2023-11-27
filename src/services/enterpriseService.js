import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteById(id) {
    return prisma.enterprise.delete({
        where: {
            id: id
        },
    })
}

export async function update(data){

    return await prisma.enterprise.update({

        where: {
            id:Number(data["id"])},
        data: {
            name: data["name"],
            accountable: data["accountable"],
            cnpj:  String(data["cnpj"]),
            address:  data["address"],
            isVisit: data["isVisit"],
         
        }
    })
}

export async function findById(id) {
    return await prisma.enterprise.findUnique({
        where: {
            id: id
        }
    })
}

export async function findAll(data) {
    return prisma.enterprise.findMany(data)
}

export async function create(data) {

    return await prisma.enterprise.create({
        data: {
            name: data["name"],
            accountable: data["accountable"],
            cnpj:  String(data["cnpj"]),
            address:  data["address"],
            isVisit: data["isVisit"],
            user: {
                create: {
                    phone_number: data["phone_number"],
                    user_type: {
                        connect: {id: data["user_type_id"]}
                    },
                    email: data["email"],
                    password: data["password"]
                }
            }
        },
        include: {
            user: true
        }
    })
}

