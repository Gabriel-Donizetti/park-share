import { requestValidator } from "@middleware/requestValidator";
import { Router } from "express";
import UserRouter from "@routes/UserRouter";

const routes : Router = Router();


routes.use(requestValidator, UserRouter)

export default routes;