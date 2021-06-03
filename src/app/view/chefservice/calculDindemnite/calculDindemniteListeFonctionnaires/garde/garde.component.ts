import { Component, OnInit } from '@angular/core';
import {IndemniteAstreinte} from '../../../../../controller/model/indemniteAstreinte.model';
import {IndemniteAstreinteService} from '../../../../../controller/service/indemnite-astreinte.service';
import {IndemniteGarde} from '../../../../../controller/model/indemnite-garde.model';
import {IndemniteGardeService} from '../../../../../controller/service/indemnite-garde.service';

@Component({
  selector: 'app-garde',
  templateUrl: './garde.component.html',
  styleUrls: ['./garde.component.scss']
})
export class GardeComponent implements OnInit {

  cols: any[];
  step:number=0;
  trim:number=0;
  year:number;
  x:String;
  indastreinte:IndemniteAstreinte;
  totalMontantNet:number;

  constructor(private  service:IndemniteGardeService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.items = data);
  }
  filteredtrim: IndemniteAstreinte[] ;
  montanttt:number=0;
  rowGroupMetadata: any;


  reset(){
    this.service.findAll().subscribe(data => this.items = data);
    this.trim=null;
    this.year=null;
  }

  searchFonctionnaire(year,trim) {
    if(trim!=0){
      this.service.findByyearTrim(year,trim).subscribe(data => this.items = data);
      this.service.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);



    }else{
      this.service.findByYear(year).subscribe(data => this.items = data);
      this.service.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);

    }
    return this.montanttt;

  }



  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        const rowData = this.items[i];
        const representativeName = rowData.ref.substr(10.14);

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.items[i - 1];
          const previousRowGroup = previousRowData.ref.substr(10.14);
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }



  findByYear(y:number){
    y=this.year;
    this.service.findByYear(this.year).subscribe(data => this.items = data);


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

  get items(): Array<IndemniteGarde> {
    return this.service.items;
  }

  set items(value: Array<IndemniteGarde>) {
    this.service.items = value;
  }


  get selectes(): Array<IndemniteGarde> {
    return this.service.selectes;
  }

  set selectes(value: Array<IndemniteGarde>) {
    this.service.selectes = value;
  }

}
