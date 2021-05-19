import {Component, OnInit} from '@angular/core';
import {Commande} from '../../../../controller/model/commande.model';
import {CommandeService} from '../../../../controller/service/commande.service';
import {MessageService} from 'primeng/api';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';
import {Chefservice} from '../../../../controller/model/chefservice.model';

@Component({
    selector: 'app-chefservice-create',
    templateUrl: './chefservice-create.component.html',
    styleUrls: ['./chefservice-create.component.scss']
})
export class ChefserviceCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: ChefserviceService) {
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.ref.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.service.findAll().subscribe(data => this.items = data);

                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Chefservice Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Chefservice();
        }
    }
    get selected(): Chefservice {
        return this.service.selected;
    }

    set selected(value: Chefservice) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
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
