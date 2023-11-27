import * as enterpriseService from "../services/enterpriseService.js"
export class enterpriseController  {
    
     static async create(req, res, next) {
        try {
            const result = await enterpriseService.create(req.body)
            res.status(201).send(result)
        }catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
        
    }
}
