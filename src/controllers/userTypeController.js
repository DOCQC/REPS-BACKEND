import * as userTypeService from "../services/userTypeService.js"


export class UserTypeController {
    static async findAll(req, res) {
        const queryParam = req.query
        const data = {
            "description": queryParam["description"],
            "skip": queryParam["pg"] == null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
            "take": queryParam["qt"] == null? 100 : Number(queryParam["qt"])
        }
        res.send(await userTypeService.findAll(data));

    }
    static async create(req, res) {
        res.status(201).send(await userTypeService.create(req.body));
    }

    static findById(req, res) {
        res.send(res.locals.userType);
    }

    static deleteById(req, res) {
        userTypeService.deleteById(res.locals.userType).then(res.sendStatus(204))
    }

    static async update(req, res) {
        const data = {
            "id": res.locals.userType["id"],
            "description": req.body["description"]
        }
        res.send(await userTypeService.update(data))
    }

}
