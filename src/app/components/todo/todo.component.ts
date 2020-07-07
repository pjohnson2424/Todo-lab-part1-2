import { Component} from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
   
  todos: Todo[] = [];

  constructor() {
    let todo1: Todo = { task: "Walk the dog", completed: false};
    let todo2: Todo = { task: "Clean my car", completed: false};
    let todo3: Todo = { task: "Go to class", completed: false};

    this.todos.push(todo1);
    this.todos.push(todo2);
    this.todos.push(todo3);
  }


  ngOnInit(): void {
  }

  addTodo(nweTodo) {
    if(nweTodo.value !=""){
      let todo: Todo = {task: nweTodo.value, completed: false}
      this.todos.push(todo);
      nweTodo.value ="";
    }
  
  }

  completeTodo(todo){
    todo.completed = !todo.completed;
  }
}
