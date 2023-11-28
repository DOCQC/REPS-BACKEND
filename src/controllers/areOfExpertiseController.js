
import * as areaOfExpertiseService from "../services/areaOfExpertiseService.js"
export class areaOfExpertiseController {

    static async create(req, res, next) {

        try {
            const result = await areaOfExpertiseService.create(req.body)
            res.status(201).send(result)
        } catch (error) {

            next(error)
        }

    }

    static async findAll(req, res, next) {

        const queryParam = req.query

        const filter = {
            description: {
                startsWith: queryParam["description"]?.toUpperCase()?.trim()
               
            }
        }


        const query = {
            skip: queryParam["pg"] == null ? 0 : (Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1)),
            take: queryParam["qt"] == null ? 100 : Number(queryParam["qt"]),
            where: filter,
        }


        try {
            res.send(await areaOfExpertiseService.findAll(query))
        } catch (err) {

            next(err)
        }

    }

    static async findById(req, res) {
        const id = req.params.id
        try {
            res.send(await areaOfExpertiseService.findById(Number(id)));
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

            const result = await areaOfExpertiseService.update(data)
            res.status(200).send(result)
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {

        try {
            await areaOfExpertiseService.deleteById(Number(req.params.id))
            res.sendStatus(204)

        } catch (err) {
            next(err)
        }

    }

}