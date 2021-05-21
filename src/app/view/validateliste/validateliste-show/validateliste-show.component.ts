import { Component, OnInit } from '@angular/core';
import {ListegardeService} from '../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../controller/model/liste-garde.model';
import {getLocaleDateTimeFormat} from '@angular/common';
import {Fonctionnaire} from '../../../controller/model/fonctionnaire.model';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-validateliste-show',
  templateUrl: './validateliste-show.component.html',
  styleUrls: ['./validateliste-show.component.scss']
})
export class ValidatelisteShowComponent implements OnInit {

  constructor( private http: HttpClient,private service: ListegardeService,private tokenStorageService: TokenStorageService) { }
  cols: any[];
  nbrligne:any=30;
mindate:any=2021-15-1;
  maxdate:any;
duredeconge:any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  matricule:string;
  email:string;
private  click(nbrl,mindate,maxdate){
  this.nbrligne==nbrl;
  this.mindate==mindate;
  this.maxdate==maxdate;
}
  ngOnInit(): void {
    this.initCol();
    this.service.init().subscribe(data =>
        this.items = data);
    this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);
    //this.duredeconge=this.selectedfonctionnaire.conge.dateFinConge.getDate()-this.selectedfonctionnaire.conge.dateDebutConge.getDate();


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.lastname=this.tokenStorageService.getUser().lastname
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
      this.firstname= user.firstname;
      this.email=user.email;

      this.lastname= user.lastname;
      this.matricule=user.matricule;
    }
// this.findBymatriculeSuperieur(this.matricule);
    this.findBymatriculeSuperieur(this.matricule);
console.log('jajaj'+this.itemss)
console.log(this.matricule)
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'id'},
      {field: 'ref', header: 'ref'},
      {field: 'dategarde', header: 'dategarde'},
      {field: 'dureDeGarde', header: 'dureDeGarde'},
      {field: 'jourounuit', header: 'jourounuit'},
      {field: 'typeGarde', header: 'typeGarde'},
      {field: 'nom', header: 'nom'},
      {field: 'prenom', header: 'prenom'}


    ];
  }
  private url = environment.urlBase + environment.urlFonctionaire +'/';

  itemss:any[];
  public findBymatriculeSuperieur(matricule:String){
    this.http.get<Array<Fonctionnaire>>(this.url+'matriculeSuperieur/'+matricule).subscribe(
        data=>{
          this.itemss = data;
        },error=>{
          console.log('erreur findBymatriculeSuperieur');
        }
    );
  }


  get selectes(): Array<ListeGarde> {
    return this.service.selectes;
  }

  set selectes(value: Array<ListeGarde>) {
    this.service.selectes = value;
  }

  get itemsfonctionnaire(): Array<Fonctionnaire> {
    return this.service.itemsfonctionnaire;
  }

  set itemsfonctionnaire(value: Array<Fonctionnaire>) {
    this.service.itemsfonctionnaire = value;
  }

  get selectedfonctionnaire(): Fonctionnaire {
    return this.service.selectedfonctionnaire;
  }

  set selectedfonctionnaire(value: Fonctionnaire) {
    this.service.selectedfonctionnaire = value;
  }

  get selectesfonctionnaire(): Array<Fonctionnaire> {
    return this.service.selectesfonctionnaire;
  }

  set selectesfonctionnaire(value: Array<Fonctionnaire>) {
    this.service.selectesfonctionnaire = value;
  }



  get selected(): ListeGarde {
    return this.service.selected;
  }

  set selected(value: ListeGarde) {
    this.service.selected = value;
  }

  get items(): Array<ListeGarde> {
    return this.service.items;
  }

  set items(value: Array<ListeGarde>) {
    this.service.items = value;
  }








}
