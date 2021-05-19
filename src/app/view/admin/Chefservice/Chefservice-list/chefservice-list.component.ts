import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Commande} from '../../../../controller/model/commande.model';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {Chefservice} from '../../../../controller/model/chefservice.model';
import {ChefserviceService} from '../../../../controller/service/chefservice.service';

// import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-chefservice-list',
    templateUrl: './chefservice-list.component.html',
    styleUrls: ['./chefservice-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class ChefserviceListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: ChefserviceService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Chefservice) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.ref + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByReference().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Chefservice();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Chefservice Deleted',
                        life: 3000
                    });
                });
            }
        });
    }
    public deleteMultiple() {
        // this.confirmationService.confirm({
        //     message: 'Are you sure you want to delete the selected Fonctionnaires?',
        //     header: 'Confirm',
        //     icon: 'pi pi-exclamation-triangle',
        //     accept: () => {
                this.service.deleteMultipleByReference().subscribe(data =>{
                    this.service.deleteMultipleIndexById();
                   // this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Chefservice Deleted',
                        life: 3000
                    });
               });
           // }
      //  });
    }
    public openCreate() {
        this.selected = new Chefservice();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(chefService: Chefservice) {
        this.selected = {...chefService};
        this.editDialog = true;
    }
    public view(chefService: Chefservice) {
        this.selected = {...chefService};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'ref', header: 'ref'},
            {field: 'matricule', header: 'matricule'},
            {field: 'email', header: 'email'},
            {field: 'password', header: 'password'}


        ];
    }

    get selected(): Chefservice {
        return this.service.selected;
    }

    set selected(value: Chefservice) {
        this.service.selected = value;
    }

    get items(): Array<Chefservice> {
        return this.service.items;
    }

    set items(value: Array<Chefservice>) {
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

    get selectes(): Array<Chefservice> {
        return this.service.selectes;
    }

    set selectes(value: Array<Chefservice>) {
        this.service.selectes = value;
    }

}
