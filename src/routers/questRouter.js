
import { Router } from "express"
import { QuestController } from "../controllers/questController.js";
import * as  questSchema from "../middlewares/json/schemas/questSchema.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js";
import { questErrorHandler } from "../middlewares/exceptions/questErrorController.js";

export const questRouter = new Router();

questRouter.get("/",
    QuestController.findAll
)

questRouter.get("/:id",
    QuestController.findById
)

questRouter.post("/",
    requestBodyValidator(questSchema.post),
    QuestController.create
)

questRouter.put("/:id",
    requestBodyValidator(questSchema.put),
    QuestController.update
)

questRouter.delete("/:id",
    QuestController.delete
)

questRouter.use(questErrorHandler)