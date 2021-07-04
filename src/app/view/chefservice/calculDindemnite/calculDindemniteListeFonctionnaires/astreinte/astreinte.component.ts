import { Component, OnInit } from '@angular/core';
import {IndemniteAstreinteService} from '../../../../../controller/service/indemnite-astreinte.service';
import {IndemniteAstreinte} from '../../../../../controller/model/indemniteAstreinte.model';
import {Fonctionnaire} from '../../../../../controller/model/fonctionnaire.model';
import {iterator} from 'rxjs/internal-compatibility';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-astreinte',
  templateUrl: './astreinte.component.html',
  styleUrls: ['./astreinte.component.scss']
})
export class AstreinteComponent implements OnInit {
  cols: any[];
step:number=0;
trim:number;
year:number;
  totalMontantNet:number;
x:String;
indastreinte:IndemniteAstreinte;
  rowGroupMetadata: {};
  matricule:string;
  isLoggedIn = false;
  rowData: any;


  constructor(private  indemniteastreinteservice:IndemniteAstreinteService,private route: Router,private tokenStorageService: TokenStorageService) { }

  private valider(){
    this.route.navigate(['/printastreinte'])

  }
  ngOnInit(): void {

    this.indemniteastreinteservice.findAll().subscribe(data => this.items = data);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
this.rowData=new  IndemniteAstreinte();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.lastname=this.tokenStorageService.getUser().lastname

      this.matricule=user.matricule;

// this.indemniteastreinteservice






    }}
  filteredtrim: IndemniteAstreinte[] ;
montanttt:number=0;
  searchFonctionnaire(year,trim) {

    if(trim!=null){
      this.indemniteastreinteservice.findByyearTrim(year,trim).subscribe(data => this.items = data);


      for (let i = 0; i < this.items.length; i++) {
        this.montanttt= this.montanttt+this.items[i].Mnt_Net;
      }
    }else{
      this.indemniteastreinteservice.findByYear(year).subscribe(data => this.items = data);
      for (let i = 0; i < this.items.length; i++) {
        this.montanttt= this.montanttt+this.items[i].Mnt_Net;
      }
    }
    this.indemniteastreinteservice.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);

    }

reset(){
  this.indemniteastreinteservice.findAll().subscribe(data => this.items = data);
this.trim=null;
this.year=null;
this.totalMontantNet=null;
}

  substr(ref:string){
const reff='h';
reff === ref.substring(12,15);
  return reff;
}
  onSort() {
    this.updateRowGroupMetaData();
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = <any> {};

    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {

         this.rowData = this.items[i];
        const representativeName = this.rowData.ref.substring(12,15)

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.items[i - 1];
          const previousRowGroup = previousRowData.ref.substring(12,15);
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

p:number;

calculall(matricule:string,annee:number){
    matricule=this.matricule;
    annee=this.year;
  this.indemniteastreinteservice.calculAll(matricule,annee).subscribe(data => this.p = data);
  // this.indemniteastreinteservice.findAll().subscribe(data => this.items = data);
  this.searchFonctionnaire(annee,this.trim);

}

  findByYear(y:number){
y=this.year;
    this.indemniteastreinteservice.findByYear(this.year).subscribe(data => this.items = data);


  }
  classname:string='btn';
  classname1:string='box';
  private change(){
    if(this.classname=='btn' && this.classname1=='box')
      this.classname='btn active',
          this.classname1='box open'
    else   if(this.classname !=='btn' && this.classname1 !=='box'){
      this.classname='btn';
      this.classname1='box';
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

  get items(): Array<IndemniteAstreinte> {
    return this.indemniteastreinteservice.items;
  }

  set items(value: Array<IndemniteAstreinte>) {
    this.indemniteastreinteservice.items = value;
  }


  get selectes(): Array<IndemniteAstreinte> {
    return this.indemniteastreinteservice.selectes;
  }

  set selectes(value: Array<IndemniteAstreinte>) {
    this.indemniteastreinteservice.selectes = value;
  }

}
