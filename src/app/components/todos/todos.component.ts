import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/todo.model';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'todos',
  templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {
  title: string = 'Todos';

  constructor(private todoService: TodoService) { }

  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  ngOnInit() { }
}