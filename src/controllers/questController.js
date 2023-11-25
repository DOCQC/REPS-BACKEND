

import * as questService from "../services/questService.js"
export class QuestController  {
    
    static async findById(req, res) {
        const id = req.params.id      
        console.log("entrei aqui")
        res.send(questService.findById(Number(id)));
    }

    static async findAll(req, res, next) {
        const queryParam = req.query

        const pagination = {
            skip: queryParam["pg"] == null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
            take: queryParam["qt"] == null? 100 : Number(queryParam["qt"]),
        }

        const  filter = {
            where: {
                title: {
                    startsWith: req.query["title"]
                },
                description:{
                    startsWith: req.query["description"]
                },
                area_of_expertise: {
                    every: {
                        description:  {
                            startsWith:  queryParam["area_of_expertise"],
                            mode: 'insensitive',
                        }
                    }
                },
                enterprise: {
                    is: {
                        name: {
                            startsWith: queryParam["enterprise"]
                        }
                    }
                }
            },

        }

        const data = {
            include: {
                area_of_expertise: true,
                enterprise: {
                    select:{
                        name: true,
                        id: true
                    }
                }
            },
            ...pagination,
           ...filter
        }
        
        
        try { 
            res.send(await questService.findAll(data));
        }catch(err){

            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400

            next(serviceError)
        }
       
    }

    static async create(req, res, next) {
    
        try {
            const result = await questService.create(req.body)
            res.status(201).send(result)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
        
    }

}