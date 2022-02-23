import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

export class GetAllTaskService {
  async execute() {
    try {
      const repo = getRepository(Task);
      const tasks = await repo.find();

      return tasks;
    } catch (error) {
      return new Error(error.message);
    }
  }
}
