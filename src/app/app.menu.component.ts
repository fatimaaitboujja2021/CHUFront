import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import {TokenStorageService} from './_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {
  img:any;
    model: any[];
     roles: string;
    isLoggedIn = false;
    showAdminBoard = false;
    showManagerBoard = false;
    username: string;
    firstname:string;
    lastname:string;
    email:string;

    constructor(public app: AppComponent, public appMain: AppMainComponent,private router: Router,private tokenStorageService: TokenStorageService) { }
    onLogout() {
        localStorage.removeItem('token');

        this.router.navigate(['/login']);
    }
    ngOnInit() {

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
        console.log(this.roles +'jhj');
        if(this.roles=='ROLE_ADMIN'){
            this.img='./assets/layout/images/doctor.png'
            this.model = [
                {
                    label: 'Favorites', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home']}
                    ]
                },
                // {
                //     label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                //     items: [
                //         {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                //         {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                //         {label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']},
                //         {label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                //         {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                //         {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                //         {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                //         {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                //         {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                //         {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                //         {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                //         {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                //         {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                //         {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                //         {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                //         {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                //     ]
                // },
                // {
                //     label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
                //     items: [
                //         {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                //         {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                //         {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                //         {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                //         {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                //         {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
                //         {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                //         {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                //         {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                //     ]
                // },
                {
                    label: 'Admin', icon: 'pi pi-fw pi-copy', routerLink: ['/Admin'],
                    items: [
                        // {label: 'Chefservice',icon: 'pi pi-fw pi-globe', routerLink: ['/view/chefservice']},
                        {label: 'les utilisateurs',icon: 'pi pi-fw pi-user', routerLink: ['/view/user']},
                        // {label: 'liste de garde',icon: 'pi pi-fw pi-clone', routerLink: ['/view/listegarde']},

                        {label: 'les fonctionnaires', icon: 'pi pi-fw pi-users', routerLink: ['/view/fonctionnaire']},
                        // {label: 'Valider Liste garde', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/listegardevalider']},

                        //   {label: 'Commande', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/commande']},
                        // {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud'],items: [
                        //         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                        //         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                        //         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                        //     ]
                        // },
                        // {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                        // {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                        // {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
                        {label: 'logout', icon: 'pi pi-fw pi-sign-in', routerLink: ['/logout'], target: '_blank'},

                        // {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank'},
                        // {label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank'},
                        // {label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank'},
                        // {label: 'Access Denied', icon: 'pi pi-fw pi-ban', routerLink: ['/accessdenied'], target: '_blank'},
                        // {label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty']},
                    ]
                },

                // {
                //     label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                //     items: [
                //         {
                //             label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                //             items: [
                //                 {
                //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //                 {
                //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                //                     ]
                //                 },
                //             ]
                //         },
                //         {
                //             label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                //             items: [
                //                 {
                //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //                 {
                //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //             ]
                //         }
                //     ]
                // },
                // {
                //     label: 'Start', icon: 'pi pi-fw pi-download',
                //     items: [
                //         {
                //             label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                //         },
                //         {
                //             label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
                //         }
                //     ]
                // }
            ];
        }

        if(this.roles=='ROLE_USER') {
            this.img='./assets/layout/images/chulog.png'
            this.model = [
                {
                    label: 'Favorites', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: ' Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
                    ]
                },
                {
                    label: ' préparation des listes de garde', icon: 'pi pi-fw pi-bars', routerLink: ['/Admin'],
                    items: [
                        {label: 'liste de garde',icon: 'pi pi-fw pi-list', routerLink: ['/view/listegarde']},
                        {label: 'liste de astreinte',icon: 'pi pi-fw pi-list', routerLink: ['view/listeastreinte']},

                    ]
                },
                {
                    label: 'Valider La présence', icon: 'pi pi-fw pi-check-square',routerLink: ['/presence'],
                    items: [
                        {label: 'La garde', icon: 'pi pi-fw pi-check-square', routerLink: ['/presence/garde']},
                        {label: 'L\'astreinte', icon: 'pi pi-fw pi-check-square', routerLink: ['/presence/astreinte']},
                    ]

                },
                {
                    label: 'L\' indemnite', icon: 'pi pi-fw pi-money-bill', routerLink: ['/view/Calculdindemnite'],
                    items: [
                        {label: 'Calcul d\' indemnite', icon: 'pi pi-fw pi-slack', routerLink: ['/view/Calculdindemnite']},
                        {label: 'Calcul d\' indemnite Astreinte', icon: 'pi pi-fw pi-slack', routerLink: ['view/CalculdindemniteAstreinte']},
                        {label: 'Calcul d\' indemnite Garde', icon: 'pi pi-fw pi-slack', routerLink: ['view/CalculdindemniteGarde']},
                    ]

                },
                //
                // {
                //     label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                //     items: [
                //         {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                //         {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                //         {label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']},
                //         {label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                //         {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                //         {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                //         {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                //         {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                //         {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                //         {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                //         {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                //         {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                //         {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                //         {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                //         {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                //         {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                //     ]
                // },
                // {
                //     label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
                //     items: [
                //         {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                //         {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                //         {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                //         {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                //         {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                //         {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
                //         {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                //         {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                //         {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                //     ]
                // },

                {
                    label: 'RAPPEL RÉGLEMENTAIRE', icon: 'pi pi-fw pi-clone', routerLink: ['/presence'],
                    items: [
                        {label: 'RAPPEL RÉGLEMENTAIRE  ', icon: 'pi pi-fw pi-clone', routerLink: ['/view/RAPPELRÉGLEMENTAIRE']},


                    ]

                },
                {
                    label: 'Logout', icon: 'pi pi-fw pi-sign-out', routerLink: ['/logout'],
                    items: [
                        {label: 'logout', icon: 'pi pi-fw pi-sign-out', routerLink: ['/logout'], target: '_blank'},                    ]

                },
                // {
                //     label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                //     items: [
                //         {
                //             label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                //             items: [
                //                 {
                //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //                 {
                //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                //                     ]
                //                 },
                //             ]
                //         },
                //         {
                //             label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                //             items: [
                //                 {
                //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //                 {
                //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                //                     items: [
                //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                //                     ]
                //                 },
                //             ]
                //         }
                //     ]
                // },
                // {
                //     label: 'Start', icon: 'pi pi-fw pi-download',
                //     items: [
                //         {
                //             label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                //         },
                //         {
                //             label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
                //         }
                //     ]
                // }
            ];


        }






    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
