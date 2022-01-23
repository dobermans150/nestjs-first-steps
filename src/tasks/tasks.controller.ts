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
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get('/:taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask(parseInt(taskId));
  }

  /*
    Manera de hacerlo con Express

  @Get()
  getTasks(@Req() req, @Res() res): Response {
    return res.send('Hellos world');
  } */

  @Post()
  createTask0(@Body() task: CreateTaskDto): string {
    return 'creating a task';
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
