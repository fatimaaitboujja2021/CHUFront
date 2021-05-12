import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({

    selector: 'app-fonctionnaire-create',
    templateUrl: './fonctionnaire-create.component.html',
    styleUrls: ['./fonctionnaire-create.component.scss']
})
export class FonctionnaireCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: FonctionnaireService,private route: Router, private cdref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }


    submitt() {
            this.stepsubmit = true;
            // if(this.multistep.controls.userDetails.invalid && this.step == 1) {
            //   return;
            // }
            // if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
            //   return;
            // }
            // if(this.multistep.controls.contactDetailss.invalid && this.step == 3) {
            //   return;
            // }
            this.step = this.step + 1;
            if(this.step >= 5) {
                this.route.navigate(['/thankyou'])
            }
        ;
        //add this line to get rid of the error
        this.cdref.detectChanges();
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
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Fonctionnaire Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Fonctionnaire();
        }
    }
    get selected(): Fonctionnaire {
        return this.service.selected;
    }

    set selected(value: Fonctionnaire) {
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

    get items(): Array<Fonctionnaire> {
        return this.service.items;
    }

    set items(value: Array<Fonctionnaire>) {
        this.service.items = value;
    }


    step: any = 1;
    stepsubmit: any = false;
    multistep = new FormGroup({
        userDetails: new FormGroup({
            refFonctionnaire:new FormControl(''),
            fname: new FormControl(''),
            lname: new FormControl(''),
            nomAr: new FormControl(''),
            prenomAr: new FormControl(''),
            nationalite: new FormControl(''),
            adresse: new FormControl(''),
            ville: new FormControl(''),
            situationFamiliale: new FormControl(''),
            dateSituationFamiliale: new FormControl(''),
            nbEnfants: new FormControl(''),
            dateNaissance: new FormControl(''),
            lieuNaissance: new FormControl(''),
            genre: new FormControl(''),

        }),
        contactDetails: new FormGroup({
            nCIN: new FormControl(''),
            dateExpirationCIN: new FormControl(''),
            nPassport: new FormControl(''),
            dateExpirationPassport: new FormControl(''),
            nPermisSejours: new FormControl(''),
            dateExpirationPermisSejours: new FormControl(''),
            nRetraite: new FormControl(''),
            regimeRetraite: new FormControl(''),
            dateRecrutement: new FormControl(''),
        }),

        contactDetailss: new FormGroup({
            nAfficiationMutuelle: new FormControl(''),
            organismeMutuelle: new FormControl(''),
            gradenom: new FormControl(''),
            dTGrade: new FormControl(''),
            refgrade: new FormControl(''),
            echelonnom: new FormControl(''),
            echelonREf: new FormControl(''),
            dTEchelon: new FormControl(''),
            matriculeSub: new FormControl(''),
            indice: new FormControl(''),
            noImmatriculationAmo: new FormControl(''),
            direction: new FormControl(''),
            division: new FormControl(''),
            dateAffectation: new FormControl(''),
            matriculeSuperieur: new FormControl(''),
            validiterGarde: new FormControl(''),
        }),
        personalDetails: new FormGroup({
            refbanque: new FormControl(''),
            nombanque: new FormControl(''),
            nCompte: new FormControl(''),
            refconge: new FormControl(''),
            typeConge: new FormControl(''),
            dateDebutConge: new FormControl(''),
            dateFinConge: new FormControl(''),
            refspecialite: new FormControl(''),
            intitulespecialite: new FormControl(''),
            reffonction: new FormControl(''),
            intitulefonction: new FormControl(''),
            reflistegarde: new FormControl(''),
            dateGarde: new FormControl(''),
            dureDeGarde: new FormControl(''),
            refservice: new FormControl(''),
            intituleservice: new FormControl(''),
            refchef: new FormControl(''),
        })
    })


    get userDetails() {
        return this.multistep.controls['userDetails']['controls'];
    }

    get contactDetails() {
        return this.multistep.controls['contactDetails']['controls'];
    }

    get contactDetailss() {
        return this.multistep.controls['contactDetails']['controls'];
    }




    previous() {

        this.step = this.step - 1;
    }



}
