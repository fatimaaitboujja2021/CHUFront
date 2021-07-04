import { Component, OnInit } from '@angular/core';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {MessageService} from 'primeng/api';
import {Observable} from 'rxjs';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-listegarde-create',
  templateUrl: './listegarde-create.component.html',
  styleUrls: ['./listegarde-create.component.scss']
})
export class ListegardeCreateComponent implements OnInit {
  constructor(private messageService: MessageService,private http: HttpClient ,private service: ListegardeService,private servicefonctionnaire :FonctionnaireService,private tokenStorageService: TokenStorageService) {
  }
  filteredFonctionnairenom: string[];
  filteredFonctionnaireprenom: any[];
  value2: any;
  value3: any;
  selectedMulti: string[] = [];
  selectedCountryAdvanced: any[];
  private url = environment.urlBase + environment.urlFonctionaire +'/';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  matricule:string;
  email:string;

  ngOnInit(): void {
    // this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);
    this.service.init();
      this.service.selected=new ListeGarde();

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

  }



  itemss:any=new Array(Fonctionnaire) ;


  searchFonctionnaire(event) {

     const filterednom: string[] = [];
    const filteredprenom: string[] = [];

    this.servicefonctionnaire.findBymatriculeSuperieur(this.matricule).subscribe(data => this.itemsfonctionnaire = data);;
    const query = event.query;


    for (let i = 0; i < this.itemsfonctionnaire.length; i++) {
      const f = this.itemsfonctionnaire[i];
      console.log( 'items i'+this.itemss[i]);
      if (this.itemsfonctionnaire[i].nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filterednom.push(this.itemsfonctionnaire[i].nom);
        console.log('d'+this.itemsfonctionnaire[i].nom);
      }
      if (this.itemsfonctionnaire[i].prenom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filteredprenom.push(this.itemsfonctionnaire[i].prenom);
        console.log('di'+this.itemsfonctionnaire[i].prenom);

      }

      // this.service.init().subscribe(data => this.items = data);

    }
    this.filteredFonctionnairenom  =filterednom;
    this.filteredFonctionnaireprenom=filteredprenom;

    // this.filteredFonctionnairenom  =filterednom;
    // this.filteredFonctionnaireprenom=filteredprenom;
    // this.itemsfonctionnaire=filterednom;
  }


  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  // public findAll(){
  //   this.service.findAll().subscribe(data => this.itemsfonctionnaire= data);
  //
  //  // return this.http.get<Array<Fonctionnaire>>(this.url);
  // }
l:number=1;
  public save() {
    this.submitted = true;
    this.l=Math.floor((Math.random() * 500000) + 1);

    this.selected.ref=this.selected.dateGarde+this.selected.fonctionnaire.nom+this.l;
    // if (this.selected.ref.trim()) {
      this.service.save().subscribe(data => {
        console.log(this.value2);
        console.log(this.selected.fonctionnaire.nom);
        this.items.push({...data});
        console.log("element OK");
          this.service.findByListebymatriculeSuperieurG(this.matricule).subscribe(data=> this.items=data);





        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'élément créé',
          life: 3000
        });

      });
      this.createDialog = false;
      this.selected = new ListeGarde();

  }
  get selected(): ListeGarde {
    return this.service.selected;
  }

  set selected(value: ListeGarde) {
    this.service.selected = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }


  get items(): Array<ListeGarde> {
    return this.service.items;
  }

  set items(value: Array<ListeGarde>) {
    this.service.items = value;
  }

  get itemsfonctionnaire(): Array<Fonctionnaire> {
    return this.service.itemsfonctionnaire;
  }

  set itemsfonctionnaire(value: Array<Fonctionnaire>) {
    this.service.itemsfonctionnaire = value;
  }
  get noms(): Array<String> {
    return this.servicefonctionnaire.noms;
  }

  set noms(value: Array<String>) {
    this.servicefonctionnaire.noms = value;
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







}
