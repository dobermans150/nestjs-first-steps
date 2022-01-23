import { Injectable } from '@nestjs/common';
import { Task } from '../../dist/tasks/interfaces/task';

/* Para especificar clases que no sean para transferir data, usamos interfaces */
@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      title: 'testing',
      description: 'testing description',
      done: false,
      _id: 1,
    },
    {
      title: 'testing 2',
      description: 'testing description 2',
      done: false,
      _id: 2,
    },
    {
      title: 'testing 3',
      description: 'testing description 3',
      done: false,
      _id: 3,
    },
  ];

  getTask(id: number): Task {
    return this.tasks.find((task) => task._id === id);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
