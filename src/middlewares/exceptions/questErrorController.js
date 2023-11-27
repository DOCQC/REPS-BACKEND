
export const questErrorHandler = function (err, req, res, next) {
    
    const serviceError = new Object()
    if(err.code == "P2025"){
        renameMessageErro(serviceError, err, req) 
    }

    if(err.code == "P2016"){
        serviceError.cause = "Desafio não encontrado"
        serviceError.message = "Desafio não encontrado"
        serviceError.statusCode = 404
    }

    next(serviceError)

}

function renameMessageErro(serviceError, err, req) {
    const str = err.meta.cause.split(' ');
    serviceError.cause = req.route.methods.delete ? "" : str[1]
    serviceError.message = req.route.methods.delete ? err.meta.cause : `required ${str[1]} doesn't exist`
    serviceError.statusCode = 400
   
}