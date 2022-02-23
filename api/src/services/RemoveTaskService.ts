import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

export class RemoveTaskService {
  async execute(id: string) {
    try {
      const repo = getRepository(Task);

      if (!(await repo.findOne(Number(id)))) {
        return new Error("Task does not exists!");
      }

      await repo.delete(id);
    } catch (error) {
      return new Error(error.message);
    }
  }
}
