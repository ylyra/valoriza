import { Router } from "express";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const createTagController = new CreateTagController();

const TagsRoutes = Router();
TagsRoutes.post("/", ensureAdmin, createTagController.handle);

export { TagsRoutes };
