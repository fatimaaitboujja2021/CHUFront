import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";
import {Chefservice} from '../model/chefservice.model';
import {Fonctionnaire} from '../model/fonctionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class ChefserviceService {

  private url = environment.urlBase + environment.urlChefService +'/';
  private _items: Array<Chefservice>;
  private _selected: Chefservice;
  private _selectes: Array<Chefservice>;

  // private _itemsFonctionnaire: Array<Fonctionnaire>;
  // private _selectedFonctionnaire: Fonctionnaire;
  // private _selectesFonctionnaire: Array<Chefservice>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  // constructor(private messageService: MessageService,
  //             private confirmationService: ConfirmationService, private http: HttpClient) {
  // }
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Chefservice>> {
    return this.http.get<Array<Chefservice>>(this.url);
  }


  public save(): Observable<Chefservice> {
    return this.http.post<Chefservice>(this.url, this.selected);
  }

  public edit(): Observable<Chefservice> {
    return this.http.put<Chefservice>(this.url, this.selected);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'ref/' + this.selected.ref);
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

  get items(): Array<Chefservice> {
    return this._items;
  }

  set items(value: Array<Chefservice>) {
    this._items = value;
  }

  get selected(): Chefservice {
    return this._selected;
  }

  set selected(value: Chefservice) {
    this._selected = value;
  }

  get selectes(): Array<Chefservice> {
    return this._selectes;
  }

  set selectes(value: Array<Chefservice>) {
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
