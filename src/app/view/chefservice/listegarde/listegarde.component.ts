import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Chefservice} from '../../../controller/model/chefservice.model';
import {ListeGarde} from '../../../controller/model/liste-garde.model';
import {ChefserviceService} from '../../../controller/service/chefservice.service';
import {ListegardeService} from '../../../controller/service/listegarde.service';

@Component({
  selector: 'app-listegarde',
  templateUrl: './listegarde.component.html',
  styleUrls: ['./listegarde.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ListegardeComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ListegardeService) { }

  ngOnInit(): void {
  }

  public openCreate() {
    this.selected = new ListeGarde();
    this.submitted = false;
    this.createDialog = true;
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
