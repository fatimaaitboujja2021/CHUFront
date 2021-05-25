import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {ListegardeService} from '../../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../../controller/model/liste-garde.model';

@Component({
  selector: 'app-listedepresence-edit',
  templateUrl: './listedepresence-edit.component.html',
  styleUrls: ['./listedepresence-edit.component.scss']
})
export class ListedepresenceEditComponent implements OnInit {
  raisons: SelectItem[];

  constructor(private messageService: MessageService, private service: ListegardeService) {
  }

  ngOnInit(): void {
    this.raisons = [
      {label: 'Elle est enceinte à partir de 6 mois ', value:'Elle est enceinte à partir de 6 mois '},
      {label: 'Elle a un enfant moins d’un an', value: 'Elle a un enfant moins d’un an'},
      {label: 'Absence pour raison de sante', value: 'Absence pour raison de sante'},
      {label: 'La prise en charge des personnes handicapees', value: 'La prise en charge des personnes handicapees'},
      {label: 'Autre', value: 'Autre'},

    ];

  }

  public edit() {
    this.submitted = true;
    if (this.selected.ref.trim()) {
      if (this.selected.id) {
        this.vider(this.selected);
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: ' Updated',
            life: 3000
          });
          this.service.init();
        });
      }
      this.editDialog = false;
      this.selected = new ListeGarde();
    }
  }
private vider(selected:ListeGarde){
if (selected.statue=='present(e)')
  selected.raisondabsence='';

  }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): ListeGarde {
    return this.service.selected;
  }

  set selected(value: ListeGarde) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<ListeGarde> {
    return this.service.items;
  }

  set items(value: Array<ListeGarde>) {
    this.service.items = value;
  }



}
