import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {CommandeService} from '../../../../controller/service/commande.service';
import {Commande} from '../../../../controller/model/commande.model';
import {FonctionnaireService} from '../../../../controller/service/fonctionnaire.service';
import {Fonctionnaire} from '../../../../controller/model/fonctionnaire.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fonctionnaire-view',
  templateUrl: './fonctionnaire-view.component.html',
  styleUrls: ['./fonctionnaire-view.component.scss']
})
export class FonctionnaireViewComponent implements OnInit {
  step: any = 1;
  stepsubmit: any = false;
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

  previous() {

    this.step = this.step - 1;
  }
  constructor(private messageService: MessageService, private service: FonctionnaireService,private route: Router, private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.selected=new Fonctionnaire();

  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Fonctionnaire {
    return this.service.selected;
  }

  set selected(value: Fonctionnaire) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
