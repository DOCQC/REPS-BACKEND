export const errorHandler = function (error, req, res, next) {
    res.status(error.statusCode).send({"message": error.message})
}