import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-fonctionnaire',
  templateUrl: './fonctionnaire.component.html',
  styleUrls: ['./fonctionnaire.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class FonctionnaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
