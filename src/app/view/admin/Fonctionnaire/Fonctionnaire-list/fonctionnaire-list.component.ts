import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Commande} from '../../../../controller/model/commande.model';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';

// import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-fonctionnaire-list',
    templateUrl: './fonctionnaire-list.component.html',
    styleUrls: ['./fonctionnaire-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class FonctionnaireListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: FonctionnaireService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Fonctionnaire) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.ref + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Fonctionnaire();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Fonctionnaire Deleted',
                        life: 3000
                    });
                });
            }
        });
    }
    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected commandes?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByReference().subscribe(data =>{
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Fonctionnaires Deleted',
                        life: 3000
                    });
                });
            }
        });
    }
    public openCreate() {
        this.selected = new Fonctionnaire();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(fonctionnaire: Fonctionnaire) {
        this.selected = {...fonctionnaire};
        this.editDialog = true;
    }
    public view(fonctionnaire: Fonctionnaire) {
        this.selected = {...fonctionnaire};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'ref', header: 'Ref'},
            {field: 'nom', header: 'nom'},
            {field: 'prenom', header: 'prenom'}
        ];
    }

    get selected(): Fonctionnaire {
        return this.service.selected;
    }

    set selected(value: Fonctionnaire) {
        this.service.selected = value;
    }

    get items(): Array<Fonctionnaire> {
        return this.service.items;
    }

    set items(value: Array<Fonctionnaire>) {
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

    get selectes(): Array<Fonctionnaire> {
        return this.service.selectes;
    }

    set selectes(value: Array<Fonctionnaire>) {
        this.service.selectes = value;
    }

}
