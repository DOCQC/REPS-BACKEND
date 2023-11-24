import {Router } from "express"
import { QuestController } from "../controllers/questController.js";


export const questRouter = new Router();

questRouter.get("/")

questRouter.get("/:id",
    QuestController.findById
)