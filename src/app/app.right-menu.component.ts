import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-right-menu',
    templateUrl: './app.right-menu.component.html'
})
export class AppRightMenuComponent {
    statusActive = true;

    messagesActive: boolean;

    constructor(public appMain: AppMainComponent, private router: Router) {
    }
    onLogout() {
        localStorage.removeItem('token');

        this.router.navigate(['/login']);
    }
    messagesClick() {
        this.statusActive = false;
        this.messagesActive = true;
    }

    statusClick() {
        this.statusActive = true;
        this.messagesActive = false;
    }
}
