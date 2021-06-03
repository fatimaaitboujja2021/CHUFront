import { Component, OnInit } from '@angular/core';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {IndemniteGardeService} from '../../../../controller/service/indemnite-garde.service';
import {IndemniteGarde} from '../../../../controller/model/indemnite-garde.model';
import {IndemniteAstreinteService} from '../../../../controller/service/indemnite-astreinte.service';
import {IndemniteAstreinte} from '../../../../controller/model/indemniteAstreinte.model';

@Component({
  selector: 'app-calcul-dindemnite-liste',
  templateUrl: './calcul-dindemnite-liste.component.html',
  styleUrls: ['./calcul-dindemnite-liste.component.scss']
})
export class CalculDindemniteListeComponent implements OnInit {
step:number=0;
  constructor(private service: IndemniteGardeService,private  indemniteastreinteservice:IndemniteAstreinteService) {


  }
  rowGroupMetadata: any;

  items:any[];
  cols: any[];
  nom:string='ait';
  prenom:string='fatima';
  year:number=2021;
  montant:number=123;
  typedegarde:string;
  ngOnInit(): void {

    this.initCol();

  }

  filteredtrim: any[] ;

  montanttotal:number=0;

  public calculDindemnite(nom:string,prenom:string,year:number,montant:number,typedegarde:string){
    nom=this.nom;
    prenom=this.prenom;
    year=this.year;
    montant=this.montant;
    typedegarde=this.typedegarde;
if(typedegarde=='garde'){
  this.items=this.filteredtrim;
  this.step=1;
  this.service.findMontantnet(this.nom,this.prenom,this.year).subscribe(data=> this.montanttotal=data,);

  this.service.calculDindemnite(this.nom,this.prenom,this.year,this.montant,this.typedegarde).subscribe(data=> this.items=data,
  );

}else if (typedegarde=='astreinte'){
  this.items=this.filteredtrim;

  this.step=1;
  this.indemniteastreinteservice.findMontantnet(this.nom,this.prenom,this.year).subscribe(data=> this.montanttotal=data,);

  this.indemniteastreinteservice.calculDindemniteastreinte(this.nom,this.prenom,this.year,this.montant,this.typedegarde).subscribe(data=> this.items=data,
  );

}
    this.updateRowGroupMetaData();

  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        //let rowData = this.items[i];
        let representativeName = this.year;

        if (i == 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          //let previousRowData = this.customers[i - 1];
          let previousRowGroup = this.year;
          if (representativeName === previousRowGroup)
            this.rowGroupMetadata[representativeName].size++;
          else
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
        }
      }
    }
  }






  private  getstatue(x:number){
    if(x==1){
      return 'customer-badge status-new';
    }
    else if(x==2){
      return 'customer-badge status-renewal';
    }
    else if(x==3){
      return 'customer-badge status-unqualified';
    }
    else if (x==4){
      return 'customer-badge status-qualified'
    }
  }











  private initCol() {
    console.log('hhhh'+this.items);

    this.cols = [
      {field: 'id', header: 'id'},
      {field: 'NbrGardes', header: 'NbrGardes'},
      {field: 'NbrHgardes', header: 'NbrHgardes'},
      {field: 'Trim', header: 'Trim'},
      {field: 'Nbr_H_Regl', header: 'Nbr_H_Regl'},
      {field: 'Nbr_H_Supp', header: 'Nbr_H_Supp'},
      {field: 'Nbr_unite', header: 'Nbr_unite'},
      {field: 'Unite', header: 'Unite'},
      {field: 'Rlqt_reported', header: 'Rlqt_reported'},
      {field: 'Rlqt_A_reported', header: 'Rlqt_A_reported'},
      {field: 'Mnt_Brut', header: 'Mnt_Brut'},
      {field: 'Impot', header: 'Impot'},
      {field: 'Mnt_Net', header: 'Mnt_Net'},


    ];
  }






  get selected(): IndemniteGarde {
    return this.service.selected;
  }

  set selected(value: IndemniteGarde) {
    this.service.selected = value;
  }

  // get items(): Array<IndemniteGarde> {
  //   return this.service.items;
  // }
  //
  // set items(value: Array<IndemniteGarde>) {
  //   this.service.items = value;
  // }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<IndemniteGarde> {
    return this.service.selectes;
  }

  set selectes(value: Array<IndemniteGarde>) {
    this.service.selectes = value;
  }



}
