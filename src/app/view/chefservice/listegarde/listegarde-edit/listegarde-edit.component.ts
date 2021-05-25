import {Component, OnInit} from '@angular/core';
import {Commande} from '../../../../controller/model/commande.model';
import {MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {ListegardeService} from '../../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../../controller/model/liste-garde.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {environment} from '../../../../../environments/environment';
import {TokenStorageService} from '../../../../_services/token-storage.service';

@Component({
    selector: 'app-listegarde-edit',
    templateUrl: './listegarde-edit.component.html',
    styleUrls: ['./listegarde-edit.component.scss']
})
export class ListegardeEditComponent implements OnInit {
    filteredFonctionnairenom: string[];
    filteredFonctionnaireprenom: any[];
    private url = environment.urlBase + environment.urlFonctionaire +'/';
    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showManagerBoard = false;
    username: string;
    firstname:string;
    lastname:string;
    matricule:string;
    email:string;

    constructor(private tokenStorageService: TokenStorageService,private messageService: MessageService,private servicefonctionnaire :FonctionnaireService, private service: ListegardeService) {
    }

    ngOnInit(): void {

        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            //this.lastname=this.tokenStorageService.getUser().lastname
            this.roles = user.roles;

            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

            this.username = user.username;
            this.firstname= user.firstname;
            this.email=user.email;

            this.lastname= user.lastname;
            this.matricule=user.matricule;
        }
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


    itemss:any[];


    searchFonctionnaire(event) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filterednom: any[] = [];
        const filteredprenom: any[] = [];
        console.log(this.itemss +'ñññ')
        this.servicefonctionnaire.findBymatriculeSuperieur(this.matricule).subscribe(data => this.itemss = data);;
        const query = event.query;
        // this.findBynom(query);

        for (let i = 0; i < this.itemss.length; i++) {
            const nom = this.itemss[i];
            console.log( 'haha'+this.itemss[i]);
            if (this.itemss[i].nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filterednom.push(this.itemss[i].nom);
                console.log('d'+nom);
            }
            if (this.itemss[i].prenom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filteredprenom.push(this.itemss[i].prenom);
            }

            // this.service.init().subscribe(data => this.items = data);

        }
        this.filteredFonctionnairenom  =filterednom;
        this.filteredFonctionnaireprenom=filteredprenom;

        // this.filteredFonctionnairenom  =filterednom;
        // this.filteredFonctionnaireprenom=filteredprenom;
        // this.itemsfonctionnaire=filterednom;
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
