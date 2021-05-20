import { Component, OnInit } from '@angular/core';
import {AppMainComponent} from '../../../app.main.component';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

classname:string='btn';
classname1:string='box';

  // $('.btn').click ->
  // $(this).toggleClass 'active'
  // $('.box').toggleClass 'open'

private change(){
  if(this.classname=='btn' && this.classname1=='box')
  this.classname='btn active',
      this.classname1='box open'
  else   if(this.classname !=='btn' && this.classname1 !=='box'){
    this.classname='btn';
    this.classname1='box';
  }


}

private roles: string[];
isLoggedIn = false;
showAdminBoard = false;
showManagerBoard = false;
username: string;
firstname:string;
lastname:string;
email:string;
matricule:string;
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

logout(): void {
  this.tokenStorageService.signOut();
  window.location.reload();
}






}
