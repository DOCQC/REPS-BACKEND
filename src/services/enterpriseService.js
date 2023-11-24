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

    const data = {
        name: "Elisson3irmãos",
        accountable: "Elisson",
        cpnj: "09174361309",
        address: "Rua 15 casa 191",
        isVisit: true,
        user: 1
    }

    return await prisma.enterprise.create({
        data:{
            name: "Elisson3irmãos",
        accountable: "Elisson",
        cpnj: "09174361309",
        address: "Rua 15 casa 191",
        isVisit: true,
        user: {
            connect: {
                id: 1
            }
        }
        }
 })
}

