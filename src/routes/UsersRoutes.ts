import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const createUserController = new CreateUserController();

const UsersRoutes = Router();
UsersRoutes.post("/", createUserController.handle);

export { UsersRoutes };
