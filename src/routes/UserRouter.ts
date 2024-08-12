import { UserController } from "@controllers/UserController";
import { Router } from "express";

const routes : Router = Router();


routes.post("/",UserController.create)

// routes.get("/",UserController.get)

// routes.put("/",UserController.update)

// routes.delete("/",UserController.delete)

export default routes;