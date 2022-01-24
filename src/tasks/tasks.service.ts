import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Task as TaskInterface } from '../../dist/tasks/interfaces/task';
import { Task, taskDocument } from './schemas/tasks.schema';
import { CreateTaskDto } from './dto/createTask.dto';
/* Para especificar clases que no sean para transferir data, usamos interfaces */
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<taskDocument>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    await newTask.save();

    return newTask;
  }
}
