import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[] = [];

  ngOnInit(): void {
  }

}
