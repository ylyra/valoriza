import { Router } from "express";
import { CreateTagController } from "../controllers/Tags/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createTagController = new CreateTagController();

const TagsRoutes = Router();
TagsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

export { TagsRoutes };
