import * as professorService from "../services/professorService.js"

//TODO Controller professor POST e PUT
export class ProfessorController {
    static async findAll(req, res) {
        const queryParam = req.query
        let filter = {
            name: {
                startsWith: queryParam["name"]
            },
            siape: {
                startsWith: queryParam["siape"]
            }
        }
        if (queryParam["lab"] !== null) {
            filter["team_lab"] = {
                is: {
                    lab_id: Number(queryParam["lab"])
                }
            }
        }

        let query = {
            skip: queryParam["pg"] == null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
            take: queryParam["qt"] == null? 100 : Number(queryParam["qt"]),
            where: filter,
        }

        const verbose = queryParam["verbose"] != null
        if (verbose) {
            query["include"] = {"user": true, "team_lab": true}
        }

        res.send(await professorService.findAll(query));

    }
    static async create(req, res, next) {
        try {
            const professor = await professorService.create(req.body)
            res.status(201).send(professor)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
    }

    static findById(req, res) {
        res.send(res.locals.professor);
    }

    static deleteById(req, res) {
        professorService.deleteById(res.locals.professor).then(res.sendStatus(204))
    }

    static async update(req, res, next) {
        const data = {
            "id": res.locals.professor["id"],
            //"attribute": req.body["attribute"]
        }
        try {
            const professor = await professorService.update(data)
            res.send(professor)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
    }

}
