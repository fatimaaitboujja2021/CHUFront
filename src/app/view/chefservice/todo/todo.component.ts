import { Component, OnInit } from '@angular/core';
import {Todo} from '../../../controller/model/todo.model';
import {NgForm} from '@angular/forms';
import {TodoService} from '../../../controller/service/todo.service';
import {Fonctionnaire} from '../../../controller/model/fonctionnaire.model';
import {TokenStorageService} from '../../../_services/token-storage.service';

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
  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  email:string;
  matricule:string;
  constructor(
      private todoService: TodoService,private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.lastname=this.tokenStorageService.getUser().lastname
      this.roles = user.roles;

      this.matricule=user.matricule;
    }
    this.getTodos()

  }

  getTodos(): void {
    console.log(this.matricule);
    this.todoService.getTodos(this.matricule).subscribe(todos => this.todos = todos)
    console.log(this.todos+'kkkkkkk')
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
