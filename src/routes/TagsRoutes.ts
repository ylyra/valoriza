import { Router } from "express";

import { CreateTagController } from "../controllers/Tags/CreateTagController";
import { ListTagsController } from "../controllers/Tags/ListTagsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const TagsRoutes = Router();
TagsRoutes.get("/", ensureAuthenticated, listTagsController.handle);
TagsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

export { TagsRoutes };
