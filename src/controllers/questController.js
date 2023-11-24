import * as questService from "../services/questService.js"
export class QuestController  {
    
    static findById(req, res) {
        const id = req.params.id      
        res.send(questService.findById(id));
    }


}