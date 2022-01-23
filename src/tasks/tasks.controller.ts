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
/* import { Request, Response } from 'express'; */

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): { hello: string } {
    return { hello: 'world' };
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
