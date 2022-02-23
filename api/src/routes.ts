import { Router } from "express";
import CreateTaskController from "./controllers/CreateTaskController";
import GetAllTaskController from "./controllers/GetAllTaskController";
import RemoveTaskController from "./controllers/RemoveTaskController";
import UpdateTaskController from "./controllers/UpdateTaskController";

const routes = Router();

routes.post("/task", CreateTaskController.handle);
routes.get("/task", GetAllTaskController.handle);
routes.delete("/task/:id", RemoveTaskController.handle);
routes.put("/task/:id", UpdateTaskController.handle);

export { routes };
