import { Router } from "express";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const createComplimentController = new CreateComplimentController();

const ComplimentsRoutes = Router();
ComplimentsRoutes.post("/", ensureAdmin, createComplimentController.handle);

export { ComplimentsRoutes };
