import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return await prisma.enterprise.findUnique({
        where: {
            id: id
        }
    })
}

export async function create(data1) {

    return await prisma.enterprise.create({
        data:{
            name: "Elisson2irmãos",
        accountable: "Elisson",
        cpnj: "09374361309",
        address: "Rua 15 casa 191",
        isVisit: true,
        user: {
            connect: {
                id: 4
            }
        }
        }
 })
}

