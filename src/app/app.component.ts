import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {TokenStorageService} from './_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
//pr changer le menu par defaut
    layoutMode = 'static';

    lightMenu = true;

    topbarColor = 'layout-topbar-blue';

    inlineUser = false;

    isRTL = false;

    inputStyle = 'outlined';

    ripple = true;



    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showManagerBoard = false;
    username: string;


    constructor(private primengConfig: PrimeNGConfig,private router: Router,private tokenStorageService: TokenStorageService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;

            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

            this.username = user.username;
        }
        else
            this.router.navigateByUrl('/login');


    }


    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    }









}
