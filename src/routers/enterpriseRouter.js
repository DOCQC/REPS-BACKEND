import { Router } from "express";
import { enterpriseController } from "../controllers/enterpriseController.js";

export const enterpriseRouter = new Router();

enterpriseRouter.post("/",
    enterpriseController.create
)