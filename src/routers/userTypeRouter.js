import { Router } from "express";
import * as userTypeController  from "../controllers/userTypeController.js"
import { requestBodyValidator } from "../middlewares/json/requestBodyValidator.js"
import { userTypeSchema } from "../middlewares/json/schemas/userTypeSchema.js";
import * as userTypeErrorHandler from "../middlewares/exceptions/userTypeErrorHandler.js";
export const userTypeRouter = new Router();

userTypeRouter.get("/", async (req, res, next) => {
    res.send(await userTypeController.findAll(req.query))
})

userTypeRouter.post("/",
    requestBodyValidator(userTypeSchema),
    async (req, res, next) => {
        res.send(await userTypeController.create(req.body))
})

userTypeRouter.get("/:id",
    userTypeErrorHandler.exists,
    async (req, res, next) => {
        res.send(res.locals.userType)
})

userTypeRouter.delete("/:id",
    userTypeErrorHandler.exists,
    async (req, res, next) => {
        res.status(204).send(await userTypeController.deleteById(res.locals.userType))
})

userTypeRouter.put("/:id",
    userTypeErrorHandler.exists,
    requestBodyValidator(userTypeSchema),
    async (req, res, next) => {
        res.send(await userTypeController.update(res.locals.userType))
})
