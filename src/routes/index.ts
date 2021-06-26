import { Router } from "express";

import { UsersRoutes } from "./UsersRoutes";

const router = Router();

router.use("/users", UsersRoutes);

export { router };
