import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {ListeGarde} from '../controller/model/liste-garde.model';
import {ListegardeService} from '../controller/service/listegarde.service';
import {FonctionnaireService} from '../controller/service/fonctionnaire.service';
import {Fonctionnaire} from '../controller/model/fonctionnaire.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CongeService} from '../controller/service/conge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
jour:string='jour';
nuit:string='nuit';
present:string='present(e)';
  absent:string='absent(e)';
garde:string='garde';
astreinte:string='astreinte';
  currentDate = new Date();

  constructor(private http: HttpClient,private congeService: CongeService,private userService: UserService,private tokenStorageService: TokenStorageService,private service: FonctionnaireService,private listeGardeservice: ListegardeService) {

  }
  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  email:string;
  matricule:string;
  matricule1:string;
  nbrjour: number;
  nbrnuit: any;
  nbrpresent: any;
  nbrabsent: any;
  nbrgarde:any;
  nbrastreinte:any;
nombredefoncConge:any;
m:any;
  d1:Date;

  ngOnInit(): void {
    this.m =  new Date().getFullYear().toString()+ '-' + '0'+(new Date().getMonth() + 1).toString().slice(-2)+'-' +(new Date().getDay() + 1).toString();
this.d1=this.m;
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
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

this.chart(this.matricule)

  }



chart(matricule:string){
    this.listeGardeservice.findbyjourounuit(this.nuit,matricule).subscribe(data=> this.nbrnuit=data);
    console.log('hhh'+this.nbrjour);
    this.service.findBymatriculeSuperieur(matricule).subscribe(data=> this.items=data);
    this.listeGardeservice.findbyjourounuit(this.jour,matricule).subscribe(data=> this.nbrjour=data);
    this.listeGardeservice.findbystatue(this.present,matricule).subscribe(data=> this.nbrpresent=data);
    this.listeGardeservice.findbystatue(this.absent,matricule).subscribe(data=> this.nbrabsent=data);
    this.listeGardeservice.findBygarde(this.garde,matricule).subscribe(data=> this.nbrgarde=data);
    this.listeGardeservice.findBygarde(this.astreinte,matricule).subscribe(data=> this.nbrastreinte=data);
    // this.service.findbyconge().subscribe(data=>this.nombredefoncConge=data)
this.congeService.nombredefonc(matricule).subscribe(data=>this.nombredefoncConge=data);

}

  get items(): Array<Fonctionnaire> {
    return this.service.items;
  }

  set items(value: Array<Fonctionnaire>) {
    this.service.items = value;
  }
}
