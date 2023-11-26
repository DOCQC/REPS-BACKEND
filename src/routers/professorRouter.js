import { Router } from "express";
import { ProfessorController } from "../controllers/professorController.js";
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js"
//import * as professorSchema  from "../middlewares/json/schemas/professorSchema.js";
import * as professorErrorHandler from "../middlewares/exceptions/professorErrorHandler.js";

//TODO professor schema

export const professorRouter = new Router();

professorRouter.get("/",
    ProfessorController.findAll
)

professorRouter.post("/",
    //requestBodyValidator(professorSchema.post),
    ProfessorController.create
)

professorRouter.get("/:id",
    professorErrorHandler.exists(false),
    ProfessorController.findById
)

professorRouter.delete("/:id",
    professorErrorHandler.exists(false),
    ProfessorController.deleteById
)

professorRouter.put("/:id",
    professorErrorHandler.exists(false),
    //requestBodyValidator(professorSchema.put),
    ProfessorController.update
)