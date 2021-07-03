import { Router } from "express";
import { CreateComplimentController } from "../controllers/Compliments/CreateComplimentController";
import { ListUserReceiveComplimentsController } from "../controllers/Compliments/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "../controllers/Compliments/ListUserSendComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

const ComplimentsRoutes = Router();
ComplimentsRoutes.post(
  "/",
  ensureAuthenticated,
  createComplimentController.handle
);
ComplimentsRoutes.get(
  "/received",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);
ComplimentsRoutes.get(
  "/sended",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

export { ComplimentsRoutes };
