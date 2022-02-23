import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

type TaskRequest = {
  title: string;
  description: string;
  username: string;
  status?: boolean;
};

export class CreateTaskService {
  async execute({ title, description, username, status = false }: TaskRequest): Promise<Task | Error> {
    try {
      const repo = getRepository(Task);

      const task = repo.create({
        title,
        description,
        username,
        status,
      });

      await repo.save(task, { reload: true });

      return task;
    } catch (error) {
      return new Error(error.message);
    }
  }
}
