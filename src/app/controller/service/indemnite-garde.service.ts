import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Fonctionnaire} from '../model/fonctionnaire.model';
import {HttpClient} from '@angular/common/http';
import {IndemniteGarde} from '../model/indemnite-garde.model';
import {Observable} from 'rxjs';
import {IndemniteAstreinte} from '../model/indemniteAstreinte.model';

@Injectable({
  providedIn: 'root'
})
export class IndemniteGardeService {

  private url = environment.urlBase + environment.urlIndemniteGarde +'/';
  private _items: Array<IndemniteGarde>;
  private _selected: IndemniteGarde;
  private _selectes: Array<IndemniteGarde>;
  private _noms:Array<String>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;



  constructor(private http: HttpClient) {
  }
  public findMontantnettotal(n:number): Observable<number>{
    return  this.http.get<number>(this.url+'montant/'+n+'/') ;
  }
  public findByyearTrim(annee:number,trim:number){
    return  this.http.get<Array<IndemniteGarde>>(this.url+'anneetrim/'+annee+'/'+trim) ;

  }

  public findByYear(annee:number): Observable<Array<IndemniteGarde>>{
    return  this.http.get<Array<IndemniteGarde>>(this.url+'annee/'+annee+'/') ;
  }
  public findMontantnet(t:string,p:string,n:number): Observable<number> {
    return this.http.get<number>(this.url + 'Montantnet/' + t + '/' + p + '/' + n + '/');
  }


  public findAll(): Observable<Array<IndemniteGarde>> {
    return this.http.get<Array<IndemniteGarde>>(this.url);
  }

  public calculDindemnite(nom:string,prenom:string,year:number,montant:number,typedegarde:string): Observable<Array<IndemniteGarde>>{
    return  this.http.get<Array<IndemniteGarde>>(this.url+'calcul/'+nom+'/'+prenom+'/'+year+'/'+montant+'/'+typedegarde) ;
  }

  get items(): Array<IndemniteGarde> {
    return this._items;
  }

  set items(value: Array<IndemniteGarde>) {
    this._items = value;
  }
  get noms(): Array<String> {
    return this._noms;
  }

  set noms(value: Array<String>) {
    this._noms = value;
  }

  get selected(): IndemniteGarde {
    return this._selected;
  }

  set selected(value: IndemniteGarde) {
    this._selected = value;
  }

  get selectes(): Array<IndemniteGarde> {
    return this._selectes;
  }

  set selectes(value: Array<IndemniteGarde>) {
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
