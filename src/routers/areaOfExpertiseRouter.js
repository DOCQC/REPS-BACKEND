import { Router } from "express";
import { areaOfExpertiseController } from "../controllers/areOfExpertiseController.js";
import * as areaOfExpertiseSchema from "../middlewares/json/schemas/areaOfExpertiseSchema.js"
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js";
import { areaOfExpertiseErrorHandler } from "../middlewares/exceptions/areaOfExpertiseErrorHandler.js";
export const areaOfExpertiseRouter = new Router();

areaOfExpertiseRouter.post("/",
    requestBodyValidator(areaOfExpertiseSchema.post),
    areaOfExpertiseController.create
)

areaOfExpertiseRouter.get("/",
    areaOfExpertiseController.findAll
)

areaOfExpertiseRouter.get("/:id",
    areaOfExpertiseController.findById
)

areaOfExpertiseRouter.delete("/:id",
    areaOfExpertiseController.delete
)

areaOfExpertiseRouter.put("/:id",
    requestBodyValidator(areaOfExpertiseSchema.put),
    areaOfExpertiseController.update
)

areaOfExpertiseRouter.use(areaOfExpertiseErrorHandler)