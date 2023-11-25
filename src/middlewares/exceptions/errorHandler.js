export const errorHandler = function (err, req, res, next) {
    console.log("erro enviado!")

    res.status(err.statusCode).send({"message": err.message, "cause": err.cause})
}