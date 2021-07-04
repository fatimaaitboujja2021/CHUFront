import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private url = environment.urlBase + environment.urlSpecialite +'/';

  constructor(private http: HttpClient) { }

  public montantdegarde(nom:string,prenom:string): Observable<number>{
    return  this.http.get<number>(this.url+'montantdegarde/'+nom+'/'+prenom+'/') ;
  }

  public montantdastreinte(nom:string,prenom:string): Observable<number>{
    return  this.http.get<number>(this.url+'montantdastreinte/'+nom+'/'+prenom+'/') ;
  }

}
