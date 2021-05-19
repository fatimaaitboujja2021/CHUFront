import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Fonctionnaire} from '../model/fonctionnaire.model';
import {ListeGarde} from '../model/liste-garde.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commande} from '../model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class ListegardeService {
  private url = environment.urlBase + environment.urlListegarde +'/';
  private urlFonctionnaire = environment.urlBase + environment.urlFonctionaire +'/';

  private _items: Array<ListeGarde>;
  private _selected: ListeGarde;
  private _selectes: Array<ListeGarde>;
  private _itemsfonctionnaire: Array<Fonctionnaire>;
  private _selectedfonctionnaire: Fonctionnaire;
  private _selectesfonctionnaire: Array<Fonctionnaire>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) { }


  public findAll(): Observable<Array<Fonctionnaire>> {
    return this.http.get<Array<Fonctionnaire>>(this.urlFonctionnaire);
  }
  public init(): Observable<Array<ListeGarde>> {
    return this.http.get<Array<ListeGarde>>(this.url);
  }
  public save(): Observable<ListeGarde> {
    return this.http.post<ListeGarde>(this.url,this.selected);
  }


  public edit(): Observable<ListeGarde> {
    return this.http.put<ListeGarde>(this.url, this.selected);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'reference/' + this.selected.ref);
  }

  public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selectes);
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }



  get itemsfonctionnaire(): Array<Fonctionnaire> {
    return this._itemsfonctionnaire;
  }

  set itemsfonctionnaire(value: Array<Fonctionnaire>) {
    this._itemsfonctionnaire = value;
  }

  get selectedfonctionnaire(): Fonctionnaire {
    return this._selectedfonctionnaire;
  }

  set selectedfonctionnaire(value: Fonctionnaire) {
    this._selectedfonctionnaire = value;
  }

  get selectesfonctionnaire(): Array<Fonctionnaire> {
    return this._selectesfonctionnaire;
  }

  set selectesfonctionnaire(value: Array<Fonctionnaire>) {
    this._selectesfonctionnaire = value;
  }



  get items(): Array<ListeGarde> {
    return this._items;
  }

  set items(value: Array<ListeGarde>) {
    this._items = value;
  }

  get selected(): ListeGarde {
    return this._selected;
  }

  set selected(value: ListeGarde) {
    this._selected = value;
  }

  get selectes(): Array<ListeGarde> {
    return this._selectes;
  }

  set selectes(value: Array<ListeGarde>) {
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
