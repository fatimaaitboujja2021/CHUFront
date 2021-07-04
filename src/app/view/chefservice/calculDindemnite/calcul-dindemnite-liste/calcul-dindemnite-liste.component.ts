import { Component, OnInit } from '@angular/core';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {IndemniteGardeService} from '../../../../controller/service/indemnite-garde.service';
import {IndemniteGarde} from '../../../../controller/model/indemnite-garde.model';
import {IndemniteAstreinteService} from '../../../../controller/service/indemnite-astreinte.service';
import {IndemniteAstreinte} from '../../../../controller/model/indemniteAstreinte.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {F} from '@angular/cdk/keycodes';
import {SpecialiteService} from '../../../../controller/service/specialite.service';

@Component({
  selector: 'app-calcul-dindemnite-liste',
  templateUrl: './calcul-dindemnite-liste.component.html',
  styleUrls: ['./calcul-dindemnite-liste.component.scss']
})
export class CalculDindemniteListeComponent implements OnInit {
step:number=0;
  filteredFonctionnairenom: string[];
  filteredFonctionnaireprenom: any[];
  constructor(private tokenStorageService: TokenStorageService,private specialiteService :SpecialiteService,private service: IndemniteGardeService,private  indemniteastreinteservice:IndemniteAstreinteService,private servicefonctionnaire :FonctionnaireService) {


  }
  rowGroupMetadata: any;
  matricule:string;

  isLoggedIn = false;

  items:any= [ ];
  cols: any[];
  nom:string;
  prenom:string;
  year:number=2021;
  montant:number;
  montant1:number;

  typedegarde:string;
  ngOnInit(): void {

    this.initCol();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.lastname=this.tokenStorageService.getUser().lastname
      this.matricule=user.matricule;
    }

  }

  filteredtrim: any[] ;

  montanttotal:number=0;
initmontant(nom:string,prenom:string,typedegarde:string){
  if(typedegarde=='garde') {
    this.servicefonctionnaire.montantdegarde(this.nom,this.prenom).subscribe(data=>this.montant=data);

  }
  else if (typedegarde=='astreinte'){
    this.servicefonctionnaire.montantdastreinte(this.nom,this.prenom).subscribe(data=>this.montant=data);

  }
return this.montant;
  }
  public calculDindemnite(nom:string,prenom:string,year:number,typedegarde:string){

  nom=this.nom;
    prenom=this.prenom;
    year=this.year;
    typedegarde=this.typedegarde;
    // this.initmontant(this.nom,this.prenom,typedegarde);
    this.montant=this.initmontant(this.nom,this.prenom,this.typedegarde);

    if(typedegarde=='garde'){
  this.items=this.filteredtrim;
  this.step=1;
  this.service.findMontantnet(this.nom,this.prenom,this.year).subscribe(data=> this.montanttotal=data,);
console.log(this.montant1+'mm')
console.log(this.montant+'mm')
  this.service.calculDindemnite(this.nom,this.prenom,this.year,this.typedegarde).subscribe(data=> this.items=data,
  );

}else if (typedegarde=='astreinte'){
  this.items=this.filteredtrim;

  this.step=1;
  this.indemniteastreinteservice.findMontantnet(this.nom,this.prenom,this.year).subscribe(data=> this.montanttotal=data,);

  this.indemniteastreinteservice.calculDindemniteastreinte(this.nom,this.prenom,this.year,this.typedegarde).subscribe(data=> this.items=data,
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

  itemss: Array<any>= [];

  searchFonctionnaire(event) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filterednom: any[] = [];
    const filteredprenom: any[] = [];
    console.log(this.itemss +'ñññ')
    console.log(this.matricule+'bjh')

    console.log(this.itemss +'ñññ')
    this.servicefonctionnaire.findBymatriculeSuperieur(this.matricule).subscribe(data => this.itemss = data);;
    const query = event.query;
    // this.findBynom(query);
    if(this.itemss==null){
      console.log(this.itemss +'nullllllll')
      console.log(this.itemss +'ñññ')
      console.log(this.matricule+'bjh')


    }

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
