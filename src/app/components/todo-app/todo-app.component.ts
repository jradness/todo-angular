import { TodoDataService } from './../../todo-data.service';
import { Todo } from './../Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoDataService]
})

export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}
 
  ngOnInit(): void {}

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get toDos() {
    return this.todoDataService.getAllToDos();
  }
}
