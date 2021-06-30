import { Router } from "express";

import { UsersRoutes } from "./UsersRoutes";
import { TagsRoutes } from "./TagsRoutes";
import { ComplimentsRoutes } from "./ComplimentsRoutes";

const router = Router();

router.use("/tags", TagsRoutes);
router.use("/users", UsersRoutes);
router.use("/compliments", ComplimentsRoutes);

export { router };
