import * as enterpriseService from "../services/enterpriseService.js"
export class enterpriseController {


    static async findById(req, res) {
        const id = req.params.id
        res.send(await enterpriseService.findById(Number(id)));
    }

    static async delete(req, res, next) {
        try {
            await enterpriseService.deleteById(Number(req.params.id))
            res.sendStatus(204)

        } catch (err) {
           
            next(err)
        }
    }

    static async update(req, res, next) {
        const data = {
            id: req.params.id,
            ...req.body
        }
        try {
            const result = await enterpriseService.update(data)
            res.status(200).send(result)
        } catch (err) {
            next(err)
        }
    }
    static async findAll(req, res, next) {
        const queryParam = req.query

        let filter = {
            name: {
                startsWith: queryParam["name"],
                mode: 'insensitive',
            },
            accountable: {
                startsWith: queryParam["accountable"],
                mode: 'insensitive',
            },
            user: {
                is: {
                    phone_number: {
                        startsWith: queryParam["phone-number"],
                        mode: 'insensitive',
                    },
                    email: {
                        startsWith: queryParam["email"],
                        mode: 'insensitive',
                    },
                }
            }
        }

        const query = {
            skip: queryParam["pg"] == null ? 0 : (Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1)),
            take: queryParam["qt"] == null ? 100 : Number(queryParam["qt"]),
            where: filter,
           
        }


        const verbose = queryParam["verbose"] != null
        if (verbose) {
            query["include"] = {"user": true}
        }

        try {
            res.send(await enterpriseService.findAll(query))
        } catch (err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
    }

    static async create(req, res, next) {
        try {
            const result = await enterpriseService.create(req.body)
            res.status(201).send(result)
        } catch (err) {
           
            next(err)
        }

    }
}


