import * as professorService from "../../services/professorService.js";


export const exists = function(isAttribute) {
    return async function (req, res, next) {
        const id = isAttribute === true? Number(req.body["professor_id"]) : Number(req.params["id"])
        if (isNaN(id) === false) {
            const professor = await professorService.findById(id)
            if (professor == null) {
                let error = new Error("required professor doesn't exists.")
                error.cause = "required professor doesn't exists."
                error.statusCode = 404
                next(error)
            }
            res.locals.professor = professor
        }

        next()
    }
}
