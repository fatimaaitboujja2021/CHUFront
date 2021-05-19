import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Commande} from '../../../../controller/model/commande.model';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';

@Component({
  selector: 'app-chefservice-view',
  templateUrl: './chefservice-view.component.html',
  styleUrls: ['./chefservice-view.component.scss']
})
export class ChefserviceViewComponent implements OnInit {


  constructor(private messageService: MessageService, private service: ChefserviceService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Chefservice {
    return this.service.selected;
  }

  set selected(value: Chefservice) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
