import { Response, Request } from "express";
import { RemoveTaskService } from "../services/RemoveTaskService";

class RemoveTaskController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new RemoveTaskService();
      const result = await service.execute(id);

      if (result instanceof Error) {
        return res.status(400).send(result.message);
      }

      return res.status(200).send({ message: "Category removed successfully!", success: true });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
}

export default new RemoveTaskController();
