import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ListegardeService} from '../../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../../controller/model/liste-garde.model';

@Component({
  selector: 'app-listedepresence-view',
  templateUrl: './listedepresence-view.component.html',
  styleUrls: ['./listedepresence-view.component.scss']
})
export class ListedepresenceViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ListegardeService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): ListeGarde {
    return this.service.selected;
  }

  set selected(value: ListeGarde) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
