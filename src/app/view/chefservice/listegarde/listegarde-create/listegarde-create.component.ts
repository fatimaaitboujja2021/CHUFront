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

@Component({
  selector: 'app-listegarde-create',
  templateUrl: './listegarde-create.component.html',
  styleUrls: ['./listegarde-create.component.scss']
})
export class ListegardeCreateComponent implements OnInit {
  constructor(private messageService: MessageService,private http: HttpClient ,private service: ListegardeService,private servicefonctionnaire :FonctionnaireService) {
  }
  filteredFonctionnairenom: string[];
  filteredFonctionnaireprenom: any[];
  value2: any;
  value3: any;
  selectedMulti: string[] = [];
  selectedCountryAdvanced: any[];
  private url = environment.urlBase + environment.urlFonctionaire +'/';


  ngOnInit(): void {
    // this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);
    this.service.init();

  }
  public findBynom(nom:String){
    this.http.get<Array<String>>(this.url+'d/'+nom).subscribe(
        data=>{
          this.noms = data;
          console.log(data);

        },error=>{
          console.log('erreur findbynom');
        }
    );
  }


  searchFonctionnaire(event) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filterednom: any[] = [];
    const filteredprenom: any[] = [];
this.servicefonctionnaire.findAll().subscribe(data => this.itemsfonctionnaire = data);;
    const query = event.query;
    // this.findBynom(query);

    for (let i = 0; i < this.itemsfonctionnaire.length; i++) {
      const nom = this.itemsfonctionnaire[i];
      console.log( 'haha'+this.itemsfonctionnaire[i]);
      if (this.itemsfonctionnaire[i].nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filterednom.push(this.itemsfonctionnaire[i].nom);
        console.log('d'+nom);
      }
      if (this.itemsfonctionnaire[i].prenom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filteredprenom.push(this.itemsfonctionnaire[i].prenom);
      }
      console.log('fri3'+filterednom);

      console.log('++++'+this.filteredFonctionnairenom);
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

  public save() {
    this.submitted = true;
    if (this.selected.ref.trim()) {
      this.service.save().subscribe(data => {
        console.log(this.value2);
        console.log(this.selected.fonctionnaire.nom);
        this.items.push({...data});
        console.log("element OK");
        this.service.init().subscribe(data => this.items = data);

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'element Created',
          life: 3000
        });
        this.service.init().subscribe(data => this.items = data);

      });
      this.createDialog = false;
      this.selected = new ListeGarde();
    }
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
