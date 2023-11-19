import Ajv from "ajv"
const ajv = new Ajv();

export const requestBodyValidator = function(schema) {
    const validate = ajv.compile(schema)
    return function(req, res, next) {
        const data = req.body
        const valid = validate(data)
        if (!valid) {
            const resBody = validate.errors[0]
            let error = new Error(resBody["message"])
            error.cause = resBody["params"]
            error.statusCode = 400

            next(error)
        }
        next()
    }
}