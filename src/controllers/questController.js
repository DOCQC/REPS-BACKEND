
import * as questService from "../services/questService.js"
export class QuestController  {
    
    static async findById(req, res) {
        const id = req.params.id      
        res.send(questService.findById(Number(id)));
    }

    static async create(req, res, next) {
    
        try {
            const result = await questService.create(req.body)
            res.status(201).send(result)
        } catch(err) {
            let serviceError = new Error(err.message);
            serviceError.cause = err.meta
            serviceError.statusCode = 400
            next(serviceError)
        }
        
    }

}