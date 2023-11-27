export const areaOfExpertiseErrorHandler = function (err, req, res, next) {

    if (err.statusCode) {
        next(err)
    }

    const serviceError = new Object()

    if (err.code == "P2002") {
        serviceError.cause = "description"
        serviceError.message = "The description must be unique"
        serviceError.statusCode = 401
    }


    const NotFoundInDeleteteOrPut = err.code == "P2025" && (req.route.methods.delete || req.route.methods.put)
    if (NotFoundInDeleteteOrPut) {
        serviceError.cause = "Area of expertise"
        serviceError.message = "Area of expertise not found"
        serviceError.statusCode = 404
    }


    if(err.code == "P2025" && !req.route.methods.delete && !req.route.methods.put){
        renameMessageErro(serviceError, err, req) 
    }

    next(serviceError)

}

function renameMessageErro(serviceError, err, req) {
    const str = err.meta.cause.split(' ');
    serviceError.cause = str[1]
    serviceError.message = `required ${str[1]} doesn't exist`
    serviceError.statusCode = 400
}