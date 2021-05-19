import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Commande} from '../../../../controller/model/commande.model';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {Customer} from '../../../../demo/domain/customer';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listegarde-list',
  templateUrl: './listegarde-list.component.html',
  styleUrls: ['./listegarde-list.component.scss']
})
export class ListegardeListComponent implements OnInit {
  selectedCustomer: ListeGarde;

  cols: any[];
  nbrligne:any=8;


  private valider(){
    this.route.navigate(['/view/listegardevalider'])

  }
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ListegardeService,private route: Router) {
  }

  ngOnInit(): void {
    this.initCol();
    this.service.init().subscribe(data => this.items = data);

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
          this.service.init().subscribe(data => this.items = data);

        });
      }
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
      this.service.init().subscribe(data => this.items = data);

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
