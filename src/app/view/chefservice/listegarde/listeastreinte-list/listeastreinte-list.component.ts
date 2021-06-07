import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../../_services/token-storage.service';

@Component({
  selector: 'app-listeastreinte-list',
  templateUrl: './listeastreinte-list.component.html',
  styleUrls: ['./listeastreinte-list.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ListeastreinteListComponent implements OnInit {
  selectedCustomer: ListeGarde;

  cols: any[];
  nbrligne:any=8;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username: string;
  firstname:string;
  lastname:string;
  matricule:string;
  email:string;
  maxdate:any=2029-10-17;
  mindate:any=2021-11-11;

  type: string='astreinte';
  public findBydateminetmax(n:String,d:Date,f:Date){

    n=this.matricule;
    d=this.mindate;
    f=this.maxdate;
    this.service.findBydateminetmax(this.matricule,this.mindate,this.maxdate,this.type).subscribe(data=> this.items=data);

  }
  private valider(){
    this.route.navigate(['/view/listegardevalider'])

  }
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ListegardeService,private route: Router,private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {

    this.initCol();
    // this.service.init().subscribe(data => this.items = data);
    this.mindate='jj/mm/aaaa';
    this.maxdate='jj/mm/aaaa';
    // this.service.init().subscribe(data => this.items = data);
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
    this.service.findByListebymatriculeSuperieurA(this.matricule).subscribe(data=> this.items=data
    );

  }



  public delete(selected: ListeGarde) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByReference().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new ListeGarde();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Chefservice Deleted',
            life: 3000
          });
          this.service.findByListebymatriculeSuperieurA(this.matricule).subscribe(data=> this.items=data);

        });
      }
    });
  }

  private  getstatue(x:string){
    console.log('ghjklkk'+this.items)

    if(x=='jour'){
      return 'customer-badge status-new';
    }
    else if(x=='nuit'){
      return 'customer-badge status-renewal';
    }
    else if(x=='garde'){
      return 'customer-badge status-negotiation';
    }
    else if (x=='astreinte'){
      return 'customer-badge status-qualified'
    }
  }

  public inedit(s) {
    this.items[this.service.findIndexById(s.id)] = this.selected;
    this.service.edit().subscribe(data => {
      this.selected = data;
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'inedit Updated',
        life: 3000
      });
      this.service.init();
    });


  }









  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Fonctionnaires?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByReference().subscribe(data =>{
          this.service.deleteMultipleIndexById();
          // this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'ListeGarde Deleted',
            life: 3000
          });
          this.service.findByListebymatriculeSuperieurA(this.matricule).subscribe(data=> this.items=data);

        });
      }
    });
  }
  public openCreate() {
    this.selected = new ListeGarde();
    this.service.init();

    this.submitted = false;
    this.createDialog = true;
  }

  public edit(listegarde: ListeGarde) {
    this.selected = {...listegarde};
    this.editDialog = true;
  }
  public view(listegarde: ListeGarde) {
    this.selected = {...listegarde};
    this.viewDialog = true;
  }




  private initCol() {
    this.cols = [
      {field: 'id', header: 'id'},
      {field: 'ref', header: 'ref'},
      {field: 'dureDeGarde', header: 'dureDeGarde'},
      {field: 'dateGarde', header: 'dateGarde'},
      {field: 'jourounuit', header: 'jourounuit'},
      {field: 'typeGarde', header: 'typeGarde'},
      {field: 'nom', header: 'nom'},
      {field: 'prenom', header: 'prenom'}


    ];
  }
  onEditInit(event): void {
    console.log(this.items);
    console.log("Edit Init Event Called");
  }

  onEditCancel(): void {
    console.log(this.items);
    console.log("Edit Cancel Event Called");
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

  get selectes(): Array<ListeGarde> {
    return this.service.selectes;
  }

  set selectes(value: Array<ListeGarde>) {
    this.service.selectes = value;
  }


}
