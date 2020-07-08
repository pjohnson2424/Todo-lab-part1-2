import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];

  constructor() {
    let todo1: Todo = { task: 'Walk the dog', completed: false };
    let todo2: Todo = { task: 'Clean my car', completed: false };
    let todo3: Todo = { task: 'Go to class', completed: false };
    let todo4: Todo = { task: 'Make dinner', completed: false };

    this.todos.push(todo1);
    this.todos.push(todo2);
    this.todos.push(todo3);
    this.todos.push(todo4);
  }

  ngOnInit(): void {}

  addTodo(newTodo) {
    if (newTodo.value != '') {
      let todo: Todo = { task: newTodo.value, completed: false };
      this.todos.push(todo);
      newTodo.value = '';
    }
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
  }
}
