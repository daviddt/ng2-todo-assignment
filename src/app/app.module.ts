import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { TodosComponent } from './components';

import { TodoService } from './services/todo.service';

import './../public/todos.css';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    TodosComponent
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
