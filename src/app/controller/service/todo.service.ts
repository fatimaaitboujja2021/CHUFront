import { Injectable } from '@angular/core';
import {Todo} from '../model/todo.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ListeGarde} from '../model/liste-garde.model';
import {Fonctionnaire} from '../model/fonctionnaire.model';


@Injectable({
  providedIn: 'root'
})export class TodoService {
  private url = environment.urlBase + environment.urlTodo +'/';
  private _items: Array<Todo>;
  get items(): Array<Todo> {
    return this._items;
  }

  set items(value: Array<Todo>) {
    this._items = value;
  }
  // private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  public getTodos(matricule:string): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.url+'todoss/'+matricule);
  }


  public createTodo(todoData: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url+'todos/', todoData);
  }






  public updateTodo(todoData: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.url+'todos/'+todoData.id, todoData);
  }
  public deleteTodo(id: string): Observable<any> {
    return this.http.delete<number>(this.url + 'todos/' + id);
  }





  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
