import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
