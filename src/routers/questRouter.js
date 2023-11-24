import {Router } from "express"
import { QuestController } from "../controllers/questController.js";
import { questShcema } from "../middlewares/json/schemas/questSchema.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js";
import  * as questErrorHandler from "../middlewares/exceptions/questErrorHandler.js";

export const questRouter = new Router();

questRouter.get("/")

questRouter.get("/:id",
    QuestController.findById
)

questRouter.post("/",
    requestBodyValidator(questShcema),
    QuestController.create
)

