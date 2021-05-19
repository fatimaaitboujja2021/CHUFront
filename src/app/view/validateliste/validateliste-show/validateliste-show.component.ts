import { Component, OnInit } from '@angular/core';
import {ListegardeService} from '../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../controller/model/liste-garde.model';
import {getLocaleDateTimeFormat} from '@angular/common';
import {Fonctionnaire} from '../../../controller/model/fonctionnaire.model';

@Component({
  selector: 'app-validateliste-show',
  templateUrl: './validateliste-show.component.html',
  styleUrls: ['./validateliste-show.component.scss']
})
export class ValidatelisteShowComponent implements OnInit {

  constructor( private service: ListegardeService) { }
  cols: any[];
  nbrligne:any=30;
mindate:any=2021-15-1;
  maxdate:any;
duredeconge:any;
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
