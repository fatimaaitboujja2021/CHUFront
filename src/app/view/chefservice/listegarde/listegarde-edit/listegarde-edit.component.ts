import {Component, OnInit} from '@angular/core';
import {Commande} from '../../../../controller/model/commande.model';
import {MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';

@Component({
    selector: 'app-listegarde-edit',
    templateUrl: './listegarde-edit.component.html',
    styleUrls: ['./listegarde-edit.component.scss']
})
export class ListegardeEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: ListegardeService) {
    }

    ngOnInit(): void {
    }

    public edit() {
        this.submitted = true;
        if (this.selected.ref.trim()) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Commande Updated',
                        life: 3000
                    });
                    this.service.init();
                });
            }
            this.editDialog = false;
            this.selected = new ListeGarde();
        }
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
