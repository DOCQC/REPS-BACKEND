import { Router } from "express";
import { areaOfExpertiseController } from "../controllers/areOfExpertiseController.js";

export const areaOfExpertiseRouter = new Router();

areaOfExpertiseRouter.post("/",
    areaOfExpertiseController.create
)