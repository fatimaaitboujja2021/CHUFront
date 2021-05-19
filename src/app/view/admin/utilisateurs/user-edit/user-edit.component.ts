import {Component, OnInit} from '@angular/core';
import {Commande} from '../../../../controller/model/commande.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {UserService} from '../../../../controller/service/user.service';
import {User} from '../../../../controller/model/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
    providers: [MessageService, ConfirmationService]

})
export class UserEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: UserService) {
    }

    ngOnInit(): void {
        this.editDialog = true;

    }

    public edit() {
        this.submitted = true;
        if (this.selected.username.trim()) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'User Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new User();
        }
    }

  public hideEditDialog() {
    this.editDialog = false;
  }
    get selected(): User {
        return this.service.selected;
    }

    set selected(value: User) {
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

    get items(): Array<User> {
        return this.service.items;
    }

    set items(value: Array<User>) {
        this.service.items = value;
    }


}
