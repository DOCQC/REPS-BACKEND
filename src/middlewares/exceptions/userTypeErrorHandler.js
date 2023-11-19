import * as userTypeService from "../../services/userTypeService.js";

export const exists = async function (req, res, next) {
    const userType = await userTypeService.findById(Number(req.params["id"]))
    if (userType == null) {
        let error = new Error("required user type doesn't exists.")
        error.cause = "required user type doesn't exist."
        error.statusCode = 404
        next(error)
    }
    res.locals.userType = userType
    next()
}