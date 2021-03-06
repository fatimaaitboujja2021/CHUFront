import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';

@Component({
  selector: 'app-listegarde-create-astreinte',
  templateUrl: './listegarde-create-astreinte.component.html',
  styleUrls: ['./listegarde-create-astreinte.component.scss']
})
export class ListegardeCreateAstreinteComponent implements OnInit {
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
//     this.service.findByListebymatriculeSuperieurG(this.matricule).subscribe(data=> this.items=data);
   // this.servicefonctionnaire.findBymatriculeSuperieur(this.matricule).subscribe(data => this.itemss = data);;

    // this.findBymatriculeSuperieur(this.matricule);
    console.log('jajaj'+this.itemss)
    console.log(this.matricule)

  }



  itemss:any[];


  searchFonctionnaire(event) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filterednom: any[] = [];
    const filteredprenom: any[] = [];
    console.log(this.itemss +'??????')
this.servicefonctionnaire.findBymatriculeSuperieur(this.matricule).subscribe(data => this.itemss = data);;
    const query = event.query;
    // this.findBynom(query);
    console.log(this.itemss +'ll')

    for (let i = 0; i < this.itemss.length; i++) {
      const nom = this.itemss[i];
      console.log( 'haha'+this.itemss[i]);
      if (this.itemss[i].nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filterednom.push(this.itemss[i].nom);
        console.log('d'+nom);
      }
      if (this.itemss[i].prenom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filteredprenom.push(this.itemss[i].prenom);
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
      this.service.save().subscribe(data => {
        console.log(this.value2);
        console.log(this.selected.fonctionnaire.nom);
        console.log(this.selected.fonctionnaire.prenom);
        console.log('reffffffff'+this.selected.ref);
        this.items.push({...data});
        console.log("element OK");
        this.service.findByListebymatriculeSuperieurA(this.matricule).subscribe(data=> this.items=data);

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'element Created',
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
