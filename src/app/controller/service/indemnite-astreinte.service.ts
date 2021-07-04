import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IndemniteGarde} from '../model/indemnite-garde.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IndemniteAstreinte} from '../model/indemniteAstreinte.model';
import {Fonctionnaire} from '../model/fonctionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class IndemniteAstreinteService {

  private url = environment.urlBase + environment.urlIndemniteAstreinte +'/';
  private _items: Array<IndemniteAstreinte>;
  private _selected: IndemniteAstreinte;
  private _selectes: Array<IndemniteAstreinte>;
  private _noms:Array<String>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) { }

  public calculDindemniteastreinte(nom:string,prenom:string,year:number,typedegarde:string): Observable<Array<IndemniteAstreinte>>{
    return  this.http.get<Array<IndemniteAstreinte>>(this.url+'calcule/'+nom+'/'+prenom+'/'+year+'/'+typedegarde) ;
  }

public findByyearTrim(annee:number,trim:number){
  return  this.http.get<Array<IndemniteAstreinte>>(this.url+'anneetrim/'+annee+'/'+trim) ;

}

  public calculAll(matricule:string,annee:number): Observable<number>{
    return  this.http.get<number>(this.url+'calculAll/'+matricule+'/'+annee) ;

  }

  public findByYear(annee:number): Observable<Array<IndemniteAstreinte>>{
    return  this.http.get<Array<IndemniteAstreinte>>(this.url+'annee/'+annee+'/') ;
  }
  public findMontantnettotal(n:number): Observable<number>{
    return  this.http.get<number>(this.url+'montant/'+n+'/') ;
  }
  public findMontantnet(t:string,p:string,n:number): Observable<number> {
    return this.http.get<number>(this.url + 'Montantnet/' + t + '/' + p + '/' + n + '/');
  }

  public findAll(): Observable<Array<IndemniteAstreinte>> {
    return this.http.get<Array<IndemniteAstreinte>>(this.url);
  }




  get items(): Array<IndemniteAstreinte> {
    return this._items;
  }

  set items(value: Array<IndemniteAstreinte>) {
    this._items = value;
  }
  get noms(): Array<String> {
    return this._noms;
  }

  set noms(value: Array<String>) {
    this._noms = value;
  }

  get selected(): IndemniteAstreinte {
    return this._selected;
  }

  set selected(value: IndemniteAstreinte) {
    this._selected = value;
  }

  get selectes(): Array<IndemniteAstreinte> {
    return this._selectes;
  }

  set selectes(value: Array<IndemniteAstreinte>) {
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
