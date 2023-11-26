import { Router } from "express";
import { LabController } from "../controllers/labController.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js"
import * as labSchema from "../middlewares/json/schemas/labSchema.js";
import * as labErrorHandler from "../middlewares/exceptions/labErrorHandler.js";
export const labRouter = new Router();

labRouter.get("/",
    LabController.findAll
)

labRouter.post("/",
    requestBodyValidator(labSchema.post),
    LabController.create
)

labRouter.get("/:id",
    labErrorHandler.exists(false),
    LabController.findById
)

labRouter.delete("/:id",
    labErrorHandler.exists(false),
    LabController.deleteById
)

labRouter.put("/:id",
    labErrorHandler.exists(false),
    requestBodyValidator(labSchema.put),
    LabController.update
)