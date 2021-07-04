import {Component, OnInit} from '@angular/core';
import {ListegardeService} from '../../../controller/service/listegarde.service';
import {ListeGarde} from '../../../controller/model/liste-garde.model';
import {getLocaleDateTimeFormat} from '@angular/common';
import {Fonctionnaire} from '../../../controller/model/fonctionnaire.model';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import * as XLSX from 'xlsx';
import {Router} from '@angular/router';
import {CongeService} from '../../../controller/service/conge.service';
import {Conge} from '../../../controller/model/conge.model';

@Component({
    selector: 'app-validateliste-show',
    templateUrl: './validateliste-show.component.html',
    styleUrls: ['./validateliste-show.component.scss']
})
export class ValidatelisteShowComponent implements OnInit {

    constructor(private congeService : CongeService,private http: HttpClient, private service: ListegardeService, private route: Router, private tokenStorageService: TokenStorageService) {
    }

    cols: any[];
    nbrligne: any = 30;
    mindate: any = 2021 - 11 - 11;
    maxdate: any = 2029 - 10 - 17;
    duredeconge: any;
    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showManagerBoard = false;
    username: string;
    firstname: string;
    lastname: string;
    matricule: string;
    email: string;
    x: any = '250px';
    fileName = 'ExcelSheet.xlsx';


    private returnto() {
        this.route.navigate(['/view/listegarde']);

    }

    ngOnInit(): void {
        this.initCol();
        // this.service.init().subscribe(data =>
        //     this.items = data);
        this.service.findAll().subscribe(data => this.itemsfonctionnaire = data);
        //this.duredeconge=this.selectedfonctionnaire.conge.dateFinConge.getDate()-this.selectedfonctionnaire.conge.dateDebutConge.getDate();
        console.log(this.maxdate);

        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            //this.lastname=this.tokenStorageService.getUser().lastname
            this.roles = user.roles;

            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

            this.username = user.username;
            this.firstname = user.firstname;
            this.email = user.email;

            this.lastname = user.lastname;
            this.matricule = user.matricule;
        }
// this.findBymatriculeSuperieur(this.matricule);
//     this.service.findByListebymatriculeSuperieur(this.matricule).subscribe(data=> this.items=data);
//         this.service.findBydateminetmax(this.matricule, this.mindate, this.maxdate, 'astreinte').subscribe(data => this.items = data);
        // this.findBymatriculeSuperieur(this.matricule);
      this.service.findByListebymatriculeSuperieurG(this.matricule).subscribe(data=> this.items=data);
        console.log('jajaj' + this.items);
        console.log(this.matricule);
        this.mindate = 2021 / 11 / 11;
        this.maxdate = 2023 / 16 / 17;
        this.fonctionnaireconge();

    }

    private initCol() {
        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'ref', header: 'ref'},
            {field: 'dategarde', header: 'dategarde'},
            {field: 'dureDeGarde', header: 'dureDeGarde'},
            {field: 'jourounuit', header: 'jourounuit'},
            {field: 'typeGarde', header: 'typeGarde'},
            {field: 'nom', header: 'nom'},
            {field: 'prenom', header: 'prenom'}


        ];
    }

    private url = environment.urlBase + environment.urlFonctionaire + '/';
    step: any = 0;
    itemss: any[];

    public hide() {
        this.x = '250px';
        this.step = 0;
    }

    exportexcel(): void {
        /* pass here the table id */
        let element = document.getElementById('print-me');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.fileName);

    }

    public findBydateminetmax(n: String, d: Date, f: Date) {

        this.step = 1;
        n = this.matricule;
        d = this.mindate;
        f = this.maxdate;
        this.service.findBydateminetmax(this.matricule, this.mindate, this.maxdate, 'garde').subscribe(data => this.items = data);
this.fonctionnaireconge();
    }
fonctionnairesitems:Array<Conge>;
  fonctionnaireconge(){
      this.congeService.fonctionnaireconge().subscribe(data=>this.itemsconge=data)
  }
    // public findBymatriculeSuperieur(matricule: String) {
    //     this.http.get<Array<Fonctionnaire>>(this.url + 'matriculeSuperieur/' + matricule).subscribe(
    //         data => {
    //             this.itemss = data;
    //         }, error => {
    //             console.log('erreur findBymatriculeSuperieur');
    //         }
    //     );
    // }



    get selectes(): Array<ListeGarde> {
        return this.service.selectes;
    }

    set selectes(value: Array<ListeGarde>) {
        this.service.selectes = value;
    }

    get itemsfonctionnaire(): Array<Fonctionnaire> {
        return this.service.itemsfonctionnaire;
    }

    set itemsfonctionnaire(value: Array<Fonctionnaire>) {
        this.service.itemsfonctionnaire = value;
    }

    get itemsconge(): Array<Conge> {
        return this.congeService.itemsconge;
    }

    set itemsconge(value: Array<Conge>) {
        this.congeService.itemsconge = value;
    }

    get selectedfonctionnaire(): Fonctionnaire {
        return this.service.selectedfonctionnaire;
    }

    set selectedfonctionnaire(value: Fonctionnaire) {
        this.service.selectedfonctionnaire = value;
    }

    get selectesfonctionnaire(): Array<Fonctionnaire> {
        return this.service.selectesfonctionnaire;
    }

    set selectesfonctionnaire(value: Array<Fonctionnaire>) {
        this.service.selectesfonctionnaire = value;
    }


    get selected(): ListeGarde {
        return this.service.selected;
    }

    set selected(value: ListeGarde) {
        this.service.selected = value;
    }

    get items(): Array<ListeGarde> {
        return this.service.items;
    }

    set items(value: Array<ListeGarde>) {
        this.service.items = value;
    }


}
