import { Response, Request } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, username, status } = req.body;

      const service = new UpdateTaskService();
      const result = await service.execute({ id, title, description, username, status });

      if (result instanceof Error) {
        return res.status(400).send(result.message);
      }

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
}

export default new UpdateTaskController();
