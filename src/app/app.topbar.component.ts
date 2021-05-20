import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import {TokenStorageService} from './_services/token-storage.service';
import {MenuService} from './app.menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppComponent, private router: Router, public appMain: AppMainComponent,private tokenStorageService: TokenStorageService) {}
img:any;
     roles: string;
    isLoggedIn = false;
    showAdminBoard = false;
    showManagerBoard = false;
    username: string;
firstname:string;
lastname:string;
email:string;


    onLogout() {
        localStorage.removeItem('token');

        this.router.navigate(['/login']);
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
        }

        if(this.roles=='ROLE_USER') {
            this.img='./assets/layout/images/chulog.png'}
        else if(this.roles=='ROLE_ADMIN'){
            this.img='./assets/layout/images/doctor.png'

        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }





}
