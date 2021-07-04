import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Fonctionnaire} from '../model/fonctionnaire.model';
import {Conge} from '../model/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private url = environment.urlBase + environment.urlConge +'/';
  private _itemsconge: Array<Conge>;
  private _selectedconge: Conge;
  private _selectesconge: Array<Conge>;
  constructor(private http: HttpClient) { }
  public nombredefonc(n:string): Observable<number>{
    return  this.http.get<number>(this.url+'count/'+n) ;
  }

  public fonctionnaireconge(): Observable<Array<Conge>>{
    return  this.http.get<Array<Conge>>(this.url+'fonctionnaireconge/') ;
  }
  get itemsconge(): Array<Conge> {
    return this._itemsconge;
  }

  set itemsconge(value: Array<Conge>) {
    this._itemsconge = value;
  }

  get selectedfonctionnaire(): Conge {
    return this._selectedconge;
  }

  set selectedfonctionnaire(value: Conge) {
    this._selectedconge = value;
  }


}
