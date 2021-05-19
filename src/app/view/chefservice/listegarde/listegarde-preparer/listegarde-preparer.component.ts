import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';

@Component({
  selector: 'app-listegarde-preparer',
  templateUrl: './listegarde-preparer.component.html',
  styleUrls: ['./listegarde-preparer.component.scss']
})
export class ListegardePreparerComponent implements OnInit {
  constructor(private messageService: MessageService, private service: ListegardeService) {
  }


  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);

  }







  public save() {
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
