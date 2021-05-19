import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-chefservice',
  templateUrl: './chefservice.component.html',
  styleUrls: ['./chefservice.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ChefserviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
