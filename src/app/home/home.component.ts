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
  absent:string='absent';
garde:string='garde';
astreinte:string='astreinte';
  currentDate = new Date();

  constructor(private http: HttpClient,private userService: UserService,private tokenStorageService: TokenStorageService,private service: FonctionnaireService,private listeGardeservice: ListegardeService) {

  }
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  email:string;
  matricule:string;
  lineData: any;
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
    console.log('month'+this.m);
    console.log('montjjjjjjjjjjh'+this.currentDate.toJSON());
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
this.listeGardeservice.findbyjourounuit(this.nuit).subscribe(data=> this.nbrnuit=data);
console.log('hhh'+this.nbrjour);
    this.service.findBymatriculeSuperieur(this.matricule).subscribe(data=> this.items=data);
    this.listeGardeservice.findbyjourounuit(this.jour).subscribe(data=> this.nbrjour=data);
    this.listeGardeservice.findbystatue(this.present).subscribe(data=> this.nbrpresent=data);
    this.listeGardeservice.findbystatue(this.absent).subscribe(data=> this.nbrabsent=data);
    this.listeGardeservice.findBygarde(this.garde).subscribe(data=> this.nbrgarde=data);
    this.listeGardeservice.findBygarde(this.astreinte).subscribe(data=> this.nbrastreinte=data);
this.service.findbyconge().subscribe(data=>this.nombredefoncConge=data)
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'rgb(255, 205, 86)',
          borderColor: 'rgb(255, 205, 86)'
        }
]

}


  }





  get items(): Array<Fonctionnaire> {
    return this.service.items;
  }

  set items(value: Array<Fonctionnaire>) {
    this.service.items = value;
  }
}
