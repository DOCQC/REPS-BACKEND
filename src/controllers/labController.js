import * as labService from "../services/labService.js"


export class LabController {
    static async findAll(req, res) {
        const queryParam = req.query
        const data = {
            "description": queryParam["description"],
            "name": queryParam["name"],
            "abbreviation": queryParam["abbreviation"],
            "url_img": queryParam["url_img"],
            "skip": queryParam["pg"] == null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
            "take": queryParam["qt"] == null? 100 : Number(queryParam["qt"]),
            "area_of_expertise": queryParam["area_of_expertise"],
            "verbose": queryParam["verbose"]
        }

        res.send(await labService.findAll(data));

    }
    static async create(req, res, next) {
        try {
            const lab = await labService.create(req.body)
            res.status(201).send(lab)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
    }

    static findById(req, res) {
        res.send(res.locals.lab);
    }

    static deleteById(req, res) {
        labService.deleteById(res.locals.lab).then(res.sendStatus(204))
    }

    static async update(req, res, next) {
        const data = {
            "id": res.locals.lab["id"],
            "description": req.body["description"],
            "name": req.body["name"],
            "abbreviation": req.body["abbreviation"],
            "url_img": req.body["url_img"],
            "laboratory_expertise": req.body["laboratory_expertise"] }
        try {
            const lab = await labService.update(data)
            res.send(lab)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
    }

}
