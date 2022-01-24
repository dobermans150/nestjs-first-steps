import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  /*  Res,
  Req, */
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../dist/tasks/interfaces/task';

/* import { Request, Response } from 'express'; */

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get('/:taskId')
  getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.tasksService.getTask(taskId);
  }

  /*
    Manera de hacerlo con Express

  @Get()
  getTasks(@Req() req, @Res() res): Response {
    return res.send('Hellos world');
  } */

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put('/:id')
  updateTask(@Body() task: CreateTaskDto, @Param() id: string) {
    console.log(task, id);

    return 'updating a task';
  }

  @Delete('/:id')
  deleteTask(@Param() id): string {
    console.log(id);

    return `Deleting a task ${id}`;
  }
}
