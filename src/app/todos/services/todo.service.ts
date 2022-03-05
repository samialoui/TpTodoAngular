import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos : Todo[] = [];
  constructor() { }

  getTodos(): Todo[]{

    return this.todos;
}
  addTodos(todo: Todo): void{
    this.todos.push(todo);
  }
  deleteTodo(todo: any){ 
   return this.todos.filter(t => t.name !== todo.name );
  }
  logTodos(): void{
    console.log(this.todos);
  }
}
