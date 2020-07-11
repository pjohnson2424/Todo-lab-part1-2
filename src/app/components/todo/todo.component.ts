import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import {NgForm}  from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];

  completeTask(todo: Todo) {
    todo.completed = true;
  }

  addTask(addTodoInputForm: NgForm) {
    this.todos.push(
      {
        task: addTodoInputForm.value.todoInput,
        completed: false
      }
    );
  }
  removeTask(index: number){
    this.todos.splice(index, 1);
  }

  filter: string = '';
}