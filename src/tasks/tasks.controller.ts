import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'retornando tareas';
  }

  @Post()
  createTask0(@Body() task: CreateTaskDto): string {
    console.log(task);

    return 'creating a task';
  }

  @Put()
  updateTask() {
    return 'updating a task';
  }

  @Delete()
  deleteTask(): string {
    return 'Deleting a task';
  }
}
