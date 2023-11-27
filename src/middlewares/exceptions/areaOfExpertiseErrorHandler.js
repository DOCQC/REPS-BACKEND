export const areaOfExpertiseErrorHandler = function (err, req, res, next) {
    
    if(err.statusCode){
        next(err)
    }
  
    const serviceError = new Object()

    const NotFoundInDelteOrPut = err.code == "P2025" && (req.route.methods.delete || req.route.methods.put)

    if(NotFoundInDelteOrPut){
        serviceError.cause = "Area de atuaca  não encontrado"
        serviceError.message = "Area de atuacao não encontrado"
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