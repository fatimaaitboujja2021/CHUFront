import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from '../controller/model/user.model';

const API_BASE_URL=environment.urlBase;
const AUTH_API = API_BASE_URL+'/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  private _items: Array<User>;
  private _selected: User;
  private _selectes: Array<User>;

  // private _itemsFonctionnaire: Array<Fonctionnaire>;
  // private _selectedFonctionnaire: Fonctionnaire;
  // private _selectesFonctionnaire: Array<Chefservice>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;






  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      matricule: user.matricule,
      password: user.password,
      firstName:user.firstName,
      lastName: user.lastName
    }, httpOptions);
  }



  get items(): Array<User> {
    return this._items;
  }

  set items(value: Array<User>) {
    this._items = value;
  }

  get selected(): User {
    return this._selected;
  }

  set selected(value: User) {
    this._selected = value;
  }

  get selectes(): Array<User> {
    return this._selectes;
  }

  set selectes(value: Array<User>) {
    this._selectes = value;
  }


  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
}
