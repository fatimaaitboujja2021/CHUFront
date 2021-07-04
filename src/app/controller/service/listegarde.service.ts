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
  private _itemss: Array<ListeGarde>;
  private _selected: ListeGarde;
  private _selectedAstreinte: ListeGarde;
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
  // public findBymatriculeSuperieur(matricule:String){
  //   this.http.get<Array<ListeGarde>>(this.url+'matriculesup/'+matricule).subscribe(
  //       data=>{
  //         this.itemss = data;
  //       },error=>{
  //         console.log('erreur  element de la liste par findBymatriculeSuperieur');
  //       }
  //   );
  // }
public findBydateminetmax(n:String,d:Date,f:Date,t:string) :Observable<Array<ListeGarde>>{
    return this.http.get<Array<ListeGarde>>(this.url+'minetmaxdate/'+n+'/'+d+'/'+f+'/'+t) ;
}
  public findByListebymatriculeSuperieurA(matricule:string): Observable<Array<ListeGarde>>{
   return  this.http.get<Array<ListeGarde>>(this.url+'matriculesupA/'+matricule) ;
  }


  public findByListebymatriculeSuperieurG(matricule:string): Observable<Array<ListeGarde>>{
    return  this.http.get<Array<ListeGarde>>(this.url+'matriculesupG/'+matricule) ;
  }

  public findbystatue(n:string,matricule:string): Observable<number>{
    return  this.http.get<number>(this.url+'statue/'+n+'/'+matricule) ;
  }

  public findBygarde(n:string,matricule:string): Observable<number>{
    return  this.http.get<number>(this.url+'typegarde/'+n+'/'+matricule) ;
  }


  public findbyjourounuit(n:string,matricule:string): Observable<number>{
    return  this.http.get<number>(this.url+'nombre/'+n+'/'+matricule) ;
  }






  public edit(): Observable<ListeGarde> {
    return this.http.put<ListeGarde>(this.url+'update', this.selected);
  }
  public editAstreinte(): Observable<ListeGarde> {
    return this.http.put<ListeGarde>(this.url+'update', this.selectedAstreinte);
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
    if (this._itemsfonctionnaire == null) {
      this._itemsfonctionnaire = new Array<Fonctionnaire>();
    }
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
    if (this._items == null) {
      this._items = new Array<ListeGarde>();
    }
    return this._items;
  }

  set items(value: Array<ListeGarde>) {
    this._items = value;
  }
  get itemss(): Array<ListeGarde> {
    if (this._itemss == null) {
      this._itemss = new Array<ListeGarde>();
    }
    return this._itemss;
  }

  set itemss(value: Array<ListeGarde>) {
    this._itemss = value;
  }

  get selected(): ListeGarde {
    return this._selected;
  }

  set selected(value: ListeGarde) {
    this._selected = value;
  }
  get selectedAstreinte(): ListeGarde {
    if (this._selectedAstreinte == null) {
      this._selectedAstreinte = new ListeGarde();
    }
    return this._selectedAstreinte;
  }

  set selectedAstreinte(value: ListeGarde) {
    this._selectedAstreinte = value;
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
