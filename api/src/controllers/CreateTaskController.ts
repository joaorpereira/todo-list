import { Response, Request } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    try {
      const { title, description, username } = req.body;

      const service = new CreateTaskService();
      const result = await service.execute({ title, username, description });

      if (result instanceof Error) {
        return res.status(400).send(result.message);
      }

      return res.status(201).send(result);
    } catch (error) {
      return res.status(400).send({ message: error.message, success: false });
    }
  }
}

export default new CreateTaskController();
