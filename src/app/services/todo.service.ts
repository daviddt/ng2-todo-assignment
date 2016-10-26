import { Injectable } from '@angular/core';

import { Todo } from './../models/todo.model';

@Injectable()
export class TodoService {
  Todos: Todo[] = [];

  constructor() { };

  getTodos(): Todo[] {
    return this.Todos;
  }

  getRemainingTodos(): Todo[] {
    return this.Todos.filter((todo: Todo) => !todo.completed);
  }

  getCompletedTodos(): Todo[] {
    return this.Todos.filter((todo: Todo) => todo.completed);
  }
}