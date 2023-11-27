import * as labService from "../../services/labService.js";


export const exists = function(isAttribute) {
    return async function (req, res, next) {
        const id = isAttribute === true? Number(req.body["lab_id"]) : Number(req.params["id"])
        if (isNaN(id) === false) {
            const lab = await labService.findById(id)
            if (lab == null) {
                let error = new Error("required lab doesn't exists.")
                error.cause = "required lab doesn't exists."
                error.statusCode = 404
                next(error)
            }
            res.locals.lab = lab
        }

        next()
    }
}
