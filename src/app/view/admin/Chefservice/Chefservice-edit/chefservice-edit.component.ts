import {Component, OnInit} from '@angular/core';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {MessageService} from 'primeng/api';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';

@Component({
    selector: 'app-chefservice-edit',
    templateUrl: './chefservice-edit.component.html',
    styleUrls: ['./chefservice-edit.component.scss']
})
export class ChefserviceEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: ChefserviceService) {
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
                        detail: 'Chefservice Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new Chefservice();
        }
    }

    public hideEditDialog() {
        this.editDialog = false;
    }
    get selected(): Chefservice {
        return this.service.selected;
    }

    set selected(value: Chefservice) {
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

    get items(): Array<Chefservice> {
        return this.service.items;
    }

    set items(value: Array<Chefservice>) {
        this.service.items = value;
    }


}
