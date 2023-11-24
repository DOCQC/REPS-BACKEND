
import * as questService from "../services/questService.js"
export class QuestController  {
    
    static async findById(req, res) {
        const id = req.params.id      
        res.send(questService.findById(id));
    }

    static async create(req, res) {
    
        try {
            const result = await questService.create(req.body)
            res.status(201).send(result)
        } catch(error) {
            console.log(error)
            res.status(400).send(error)
        }
        
      
    }

}