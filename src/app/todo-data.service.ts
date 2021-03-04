import { Injectable } from '@angular/core';
import { Todo } from './components/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;
  toDos: Todo[] = [];

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.toDos.push(todo);
    return this;
  }

  getAllToDos(): Todo[] {
    return this.toDos;
  }
}
