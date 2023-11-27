import { Router } from "express";
import { enterpriseController } from "../controllers/enterpriseController.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js";
import * as enterpriseSchema from "../middlewares/json/schemas/enterpriseSchema.js"

export const enterpriseRouter = new Router();


enterpriseRouter.put("/:id",
    requestBodyValidator(enterpriseSchema.put),
    enterpriseController.update
)
enterpriseRouter.post("/",
    requestBodyValidator(enterpriseSchema.post),
    enterpriseController.create
)

enterpriseRouter.get("/",
    enterpriseController.findAll)