import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findById(id){
    return await prisma.quest.findUnique({
        where: {
            id: id
        }
    })
}

export async function create(data) {
           return await prisma.quest.create({
            data
        })  
}

export async function findAll(data){
    console.log("Fazendo a  consulta no banco")
  

    return await prisma.quest.findMany(data)
}