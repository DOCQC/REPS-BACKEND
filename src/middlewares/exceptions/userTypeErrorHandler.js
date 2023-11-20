import * as userTypeService from "../../services/userTypeService.js";


export const exists = async function (req, res, next) {
    const id = req.body["user_type_id"] == null? Number(req.params["id"]) : Number(req.body["user_type_id"])
    const userType = await userTypeService.findById(id)
    if (userType == null) {
        let error = new Error("required user type doesn't exists.")
        error.cause = "required user type doesn't exist."
        error.statusCode = 404
        next(error)
    }
    res.locals.userType = userType

    next()
}