import { Response, Request } from "express";
import { GetAllTaskService } from "../services/GetAllTaskService";

class GetAllTaskController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllTaskService();
      const tasks = await service.execute();

      return res.status(200).send(tasks);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
}

export default new GetAllTaskController();
