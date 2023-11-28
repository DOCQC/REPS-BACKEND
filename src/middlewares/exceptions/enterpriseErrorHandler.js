export const enterpriseErrorHandler = function (err, req, res, next) {
    

    if(err.statusCode){
        next(err)
    }
  

    const serviceError = new Object()

    const NotFoundInDeleteOrPut = err.code == "P2025" && (req.route.methods.delete || req.route.methods.put)

    if(NotFoundInDeleteOrPut){
        serviceError.cause = "Enterprise"
        serviceError.message = "Enterprise not found"
        serviceError.statusCode = 404
    }


    if(err.code == "P2002"){
        serviceError.cause = `${err.meta.target[0]}`
        serviceError.message = `THe ${err.meta.target[0]} must be unique`
        serviceError.statusCode = 401
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