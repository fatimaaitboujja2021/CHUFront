import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Commande} from '../../../../controller/model/commande.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';

@Component({
  selector: 'app-fonctionnaire-view',
  templateUrl: './fonctionnaire-view.component.html',
  styleUrls: ['./fonctionnaire-view.component.scss']
})
export class FonctionnaireViewComponent implements OnInit {


  constructor(private messageService: MessageService, private service: FonctionnaireService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Fonctionnaire {
    return this.service.selected;
  }

  set selected(value: Fonctionnaire) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
