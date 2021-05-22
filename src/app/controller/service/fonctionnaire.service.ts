import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Commande} from '../model/commande.model';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";
import {Fonctionnaire} from '../model/fonctionnaire.model';
import {ListeGarde} from '../model/liste-garde.model';

@Injectable({
  providedIn: 'root'
})
export class FonctionnaireService {

  private url = environment.urlBase + environment.urlFonctionaire +'/';
  private _items: Array<Fonctionnaire>;
  private _selected: Fonctionnaire;
  private _selectes: Array<Fonctionnaire>;
private _noms:Array<String>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  // constructor(private messageService: MessageService,
  //             private confirmationService: ConfirmationService, private http: HttpClient) {
  // }
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Fonctionnaire>> {
    return this.http.get<Array<Fonctionnaire>>(this.url);
  }

  public save(): Observable<Fonctionnaire> {
    return this.http.post<Fonctionnaire>(this.url, this.selected);
  }

  public edit(): Observable<Fonctionnaire> {
    return this.http.put<Fonctionnaire>(this.url, this.selected);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'reference/' + this.selected.ref);
  }

  public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selectes);
  }
//  public findBymatriculeSuperieur(): Observable<Array<Fonctionnaire>> {
//   return this.http.get(<Array<Fonctionnaire>>(this.url+'matriculeSuperieur/'+this.selected.matriculeSuperieur));
// }


  // public findBymatriculeSuperieur(matricule:String){
  //   this.http.get<Array<Fonctionnaire>>(this.url+'matriculeSuperieur/'+matricule).subscribe(
  //       data=>{
  //         this.items = data;
  //       },error=>{
  //         console.log('erreur findBymatriculeSuperieur');
  //       }
  //   );
  // }
  public findBymatriculeSuperieur(matricule:string): Observable<Array<Fonctionnaire>>{
    return  this.http.get<Array<Fonctionnaire>>(this.url+'matriculeSuperieur/'+matricule) ;
  }
  public findBynom(nom:String){
    this.http.get<Array<String>>(this.url+'d/'+nom).subscribe(
        data=>{
          this.noms = data;
        },error=>{
          console.log('erreur findbynom');
        }
    );
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

  get items(): Array<Fonctionnaire> {
    return this._items;
  }

  set items(value: Array<Fonctionnaire>) {
    this._items = value;
  }
  get noms(): Array<String> {
    return this._noms;
  }

  set noms(value: Array<String>) {
    this._noms = value;
  }

  get selected(): Fonctionnaire {
    return this._selected;
  }

  set selected(value: Fonctionnaire) {
    this._selected = value;
  }

  get selectes(): Array<Fonctionnaire> {
    return this._selectes;
  }

  set selectes(value: Array<Fonctionnaire>) {
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
