


export const questErrorHandler = function (err, req, res, next) {
    
    let serviceError = {
        message:null,
        cause: null,
        statusCode: null
    }
    if(err.code == "P2025"){
        renameMessageErro(serviceError, err, req) 
    }

    next(serviceError)

}


function renameMessageErro(serviceError, err, req) {
    const str = err.meta.cause.slice(' ');
    serviceError.cause = req.route.methods.delete ? "" : str[1]
    serviceError.message = req.route.methods.delete ? err.meta.cause : `required ${str[1]} doesn't exist`
    serviceError.statusCode = 400
   
}