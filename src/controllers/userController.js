import * as userService from "../services/userService.js"


export class UserController {
    static async findAll(req, res) {
        const queryParam = req.query

        let filter = {
            phone_number: {
                startsWith: queryParam["phone-number"]
            },
            email: {
                startsWith: queryParam["email"]
            }
        }
        const userTypeId = queryParam["user-type-id"]
        if (isNaN(userTypeId) === false) {
            filter["user_type_id"] = Number(queryParam["user-type-id"])
        }

        const query = {
            skip: queryParam["pg"] == null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
            take: queryParam["qt"] == null? 100 : Number(queryParam["qt"]),
            where: filter,
        }

        res.send(await userService.findAll(query));

    }
    static async create(req, res) {
        res.status(201).send(await userService.create(req.body));
    }

    static findById(req, res) {
        res.send(res.locals.user);
    }

    static deleteById(req, res) {
        userService.deleteById(res.locals.user).then(res.sendStatus(204))
    }

    static async update(req, res) {
        const data = {
            "id": res.locals.user["id"],
            "phone_number": req.body["phone_number"],
            "user_type_id": req.body["user_type_id"],
            "email": req.body["email"],
            "password": req.body["password"]
        }
        res.send(await userService.update(data))
    }

}