import {Router } from "express"
import { QuestController } from "../controllers/questController.js";
import { questShcema } from "../middlewares/json/schemas/questSchema.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js";

export const questRouter = new Router();

questRouter.get("/", 
QuestController.findAll
)

questRouter.get("/:id",
    QuestController.findById
)



questRouter.post("/",
    requestBodyValidator(questShcema),
    QuestController.create
)

