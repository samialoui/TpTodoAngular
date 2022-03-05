import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[]=[];

  constructor(private service:TodoService) { }

  ngOnInit(): void {
 this.todos = this.service.getTodos();
 this.service.logTodos();
  }


  addTodoToList(Name:string,Content:string){
    var val={name: Name,
             content: Content}
    this.service.addTodos(val);
  }
 
  deleteTodo(todo:any){
    this.todos = this.service.deleteTodo(todo);
  }

}
