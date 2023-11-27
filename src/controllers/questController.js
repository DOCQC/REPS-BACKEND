import * as questService from "../services/questService.js"
export class QuestController {

    static async findById(req, res) {
        const id = req.params.id

        try {
            res.send( await questService.findById(Number(id)));
        }catch(err){   
            next(err)
        }  
    }


    static async findAll(req, res, next) {
        const queryParam = req.query

        const pagination = {
            skip: queryParam["pg"] == null ? 0 : (Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1)),
            take: queryParam["qt"] == null ? 100 : Number(queryParam["qt"]),
        }

        const filter = {
            where: {
                title: {
                    startsWith: req.query["title"]
                },
                description: {
                    startsWith: req.query["description"]
                },
                area_of_expertise: {
                    every: {
                        description: {
                            startsWith: queryParam["area_of_expertise"],
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
                    select: {
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
        } catch (err) {
            next(serviceError)
        }

    }

    static async create(req, res, next) {

        try {
            const result = await questService.create(req.body)
            res.status(201).send(result)
        } catch (err) {

            next(err)
        }

    }

    static async update(req, res, next) {
        try {
            const data = {
                id: req.params.id,
                ...req.body
            }

            const result = await questService.update(data)
            res.status(200).send(result)
        } catch (err) {

            next(err)
        }
    }

    static async delete(req, res, next) {

        try {
            await questService.deleteById(Number(req.params.id))
            res.sendStatus(204)

        } catch (err) {
            next(err)
        }
    }
}
