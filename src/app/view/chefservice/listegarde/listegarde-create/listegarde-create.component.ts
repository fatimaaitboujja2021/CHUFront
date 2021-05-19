import { Component, OnInit } from '@angular/core';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {MessageService} from 'primeng/api';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-listegarde-create',
  templateUrl: './listegarde-create.component.html',
  styleUrls: ['./listegarde-create.component.scss']
})
export class ListegardeCreateComponent implements OnInit {
  constructor(private messageService: MessageService, private service: ListegardeService) {
  }
  filteredFonctionnairenom: any[];
  filteredFonctionnaireprenom: any[];
  value2: any;
  value3: any;
  selectedMulti: string[] = [];
  selectedCountryAdvanced: any[];


  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);

  }



  searchFonctionnaire(event) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filterednom: any[] = [];
    const filteredprenom: any[] = [];

    const query = event.query;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.itemsfonctionnaire.length; i++) {
      const fonctionnaire = this.itemsfonctionnaire[i];
      if (fonctionnaire.nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filterednom.push(fonctionnaire);
      }
      if (fonctionnaire.prenom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filteredprenom.push(fonctionnaire);
      }
    }

    //this.filteredFonctionnairenom  = filterednom;
    this.filteredFonctionnaireprenom=filteredprenom;
    this.itemsfonctionnaire=filterednom;
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
        this.items.push({...data});
        console.log("element OK");
        this.service.init().subscribe(data => this.items = data);

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
