import { Router } from "express";

import { UsersRoutes } from "./UsersRoutes";
import { TagsRoutes } from "./TagsRoutes";

const router = Router();

router.use("/tags", TagsRoutes);
router.use("/users", UsersRoutes);

export { router };
