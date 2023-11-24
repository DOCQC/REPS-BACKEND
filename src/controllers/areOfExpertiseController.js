
import * as areaOfExpertiseService from "../services/areaOfExpertiseService.js"
export class areaOfExpertiseController  {
    
     static async create(req, res, next) {
        
        try {
            const result = await areaOfExpertiseService.create(req.body)
            res.status(201).send(result)
        } catch(error) {
            let serviceError = new Error(error.message);
            serviceError.cause = error.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
        
    }

}