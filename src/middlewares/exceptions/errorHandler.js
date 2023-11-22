export const errorHandler = function (error, req, res) {
    res.status(error.statusCode).send({"message": error.message, "cause": error.cause})
}