import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

type TaskUpdateRequest = {
  id: string;
  title: string;
  description: string;
  username: string;
  status: boolean;
};

export class UpdateTaskService {
  async execute({ title, description, id, username, status }: TaskUpdateRequest): Promise<Task | Error> {
    try {
      const repo = getRepository(Task);

      const task = await repo.findOne(id);

      if (!task) {
        return new Error("Task does not exists");
      }

      task.description = description ? description : task.description;
      task.title = title ? title : task.title;
      task.username = username ? username : task.username;
      task.status = status;

      await repo.save(task);

      return task;
    } catch (error) {
      return new Error(error.message);
    }
  }
}
