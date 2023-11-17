import { Router } from "express";
import * as typeUserController  from "../controllers/typeUserController.js"
//const typeUserController = require("../controllers/typeUserController")
export const typeUserRouter = new Router();

typeUserRouter.get("/", (req, res, next) => {
    console.log("test router")
    res.send(typeUserController.findAll())
})
