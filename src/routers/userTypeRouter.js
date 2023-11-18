import { Router } from "express";
import * as userTypeController  from "../controllers/userTypeController.js"


export const userTypeRouter = new Router();

userTypeRouter.get("/", async (req, res, next) => {
    res.send(await userTypeController.findAll(req.query))
})

userTypeRouter.post("/", async (req, res, next) => {
    res.send(await userTypeController.create(req.body))
})

userTypeRouter.get("/:id", async (req, res, next) => {
    res.send(await userTypeController.findById(Number(req.params["id"])))
})

// TODO DELETE 200->204
userTypeRouter.delete("/:id", async (req, res, next) => {
    res.send(await userTypeController.deleteById(Number(req.params["id"])))
})

userTypeRouter.put("/:id", async (req, res, next) => {
    res.send(await userTypeController.update(Number(req.params["id"]), req.body))
})
