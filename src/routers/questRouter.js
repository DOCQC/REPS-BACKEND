
import { Router } from "express"
import { QuestController } from "../controllers/questController.js";
import * as  questShcema from "../middlewares/json/schemas/questSchema.js";
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
    requestBodyValidator(questShcema.post),
    QuestController.create
)

questRouter.put("/:id",
    requestBodyValidator(questShcema.put),
    QuestController.update
)

questRouter.delete("/:id",
    QuestController.delete
)

questRouter.use(questErrorHandler)