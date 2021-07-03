import { Router } from "express";
import { AuthenticateUserController } from "../controllers/Users/AuthenticateUserController";
import { CreateUserController } from "../controllers/Users/CreateUserController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const UsersRoutes = Router();
UsersRoutes.post("/", createUserController.handle);
UsersRoutes.post("/login", authenticateUserController.handle);

export { UsersRoutes };
