import { Component, OnInit } from '@angular/core';
import {Todo} from '../../../controller/model/todo.model';
import {NgForm} from '@angular/forms';
import {TodoService} from '../../../controller/service/todo.service';
import {Fonctionnaire} from '../../../controller/model/fonctionnaire.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  newTodo: Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();

  constructor(
      private todoService: TodoService,
  ) {}

  ngOnInit(): void {

    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
        // .then(todos => this.todos = todos );
  }
  get items(): Array<Todo> {
    return this.todoService.items;
  }

  set items(value: Array<Todo>) {
    this.todoService.items = value;
  }
  createTodo(todoForm: NgForm): void {
     this.todoService.createTodo(this.newTodo).subscribe(createTodo => {
       todoForm.reset();
       this.newTodo = new Todo();
       this.todos.unshift(createTodo);
       this.getTodos();

     });

  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id != id);
    })
  }

  updateTodo(todoData: Todo): void {
    console.log(todoData);
    this.todoService.updateTodo(todoData)
        .subscribe(updatedTodo => {
          let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
          Object.assign(existingTodo, updatedTodo);
          this.clearEditing();
        });
  }

  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData)
        .subscribe(updatedTodo => {
          let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
          Object.assign(existingTodo, updatedTodo);
        });
  }

  editTodo(todoData: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  clearEditing(): void {
    this.editingTodo = new Todo();
    this.editing = false;
  }


}
