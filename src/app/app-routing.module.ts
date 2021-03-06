import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';

import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {CommandesComponent} from './view/admin/commandes/commandes.component';
import {FonctionnaireComponent} from './view/admin/Fonctionnaire/fonctionnaire.component';
import {ChefserviceComponent} from './view/admin/Chefservice/chefservice.component';
import {ChefserviceListComponent} from './view/admin/Chefservice/Chefservice-list/chefservice-list.component';
import {ListegardeComponent} from './view/chefservice/listegarde/listegarde.component';
import {ListegardePreparerComponent} from './view/chefservice/listegarde/listegarde-preparer/listegarde-preparer.component';
import {ValidatelisteComponent} from './view/validateliste/validateliste.component';
import {ProfileComponent} from './view/chefservice/profile/profile.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BoardUserComponent} from './RAPPEL-R??GLEMENTAIRE/board-user.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {AuthGuard} from './auth/auth.guard';
import {CommonModule} from '@angular/common';
import {UserComponent} from './view/admin/utilisateurs/user.component';
import {UtilisateurCreateComponent} from './view/admin/utilisateurs/utilisateur-create/utilisateur-create.component';
import {UserEditComponent} from './view/admin/utilisateurs/user-edit/user-edit.component';
import {LogoutComponent} from './logout/logout.component';
import {FonctionnaireChefComponent} from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef.component';
import {CheckattendanceComponent} from './view/chefservice/listegarde/checkattendance/checkattendance.component';
import {ListedepresenceComponent} from './view/chefservice/listegarde/checkattendance/listedepresence/listedepresence.component';
import {ListeastreinteListComponent} from './view/chefservice/listegarde/listeastreinte-list/listeastreinte-list.component';
import {CalculDindemniteListeComponent} from './view/chefservice/calculDindemnite/calcul-dindemnite-liste/calcul-dindemnite-liste.component';
import {AstreinteComponent} from './view/chefservice/calculDindemnite/calculDindemniteListeFonctionnaires/astreinte/astreinte.component';
import {GardeComponent} from './view/chefservice/calculDindemnite/calculDindemniteListeFonctionnaires/garde/garde.component';
import {CheckAttendanceAstreinteComponent} from './view/chefservice/listegarde/check-attendance-astreinte/check-attendance-astreinte.component';
import {TodoComponent} from './view/chefservice/todo/todo.component';
import {PrintastreinteComponent} from './view/chefservice/calculDindemnite/printlesliste/printastreinte/printastreinte.component';
import {PrintgardeComponent} from './view/chefservice/calculDindemnite/printlesliste/printgarde/printgarde.component';
import {ListeastreinteShowComponent} from './view/validateliste/listeastreinte-show/listeastreinte-show.component';
import {ListedePresenceAstreinteComponent} from './view/chefservice/listegarde/check-attendance-astreinte/listede-presence-astreinte/listede-presence-astreinte.component';
import {ListedePresenceAstreinteEditComponent} from './view/chefservice/listegarde/check-attendance-astreinte/listede-presence-astreinte-edit/listede-presence-astreinte-edit.component';

const routes: Routes = [

            { path: 'registration', component: RegisterComponent },
            { path: 'login', component: LoginComponent },


    {path: '', component: AppMainComponent,canActivate:[AuthGuard],
        children: [

            {path: 'logout', component: LogoutComponent},
            {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
            {path: 'profile/info', component: ProfileComponent,canActivate:[AuthGuard]},
            {path: 'listefonctionnaires', component: FonctionnaireChefComponent},
            {path: 'presence/garde', component: CheckattendanceComponent},
            {path: 'presence/astreinte', component: CheckAttendanceAstreinteComponent},
            { path: 'todo', component: TodoComponent },
            { path: 'presence/edite', component: ListedePresenceAstreinteEditComponent },

            { path: 'printastreinte', component: PrintastreinteComponent },
            { path: 'printgarde', component: PrintgardeComponent},
            {path: 'view/listegarde', component: ListegardeComponent},
            {path: 'view/listeastreinte', component: ListeastreinteListComponent},
            {path: 'view/listedepresence', component: ListedepresenceComponent},
            {path: 'view/listeastreintedepresence', component: ListedePresenceAstreinteComponent},
            {path: 'view/listegardevalider', component: ValidatelisteComponent},
            {path: 'view/listeastreinteshow', component: ListeastreinteShowComponent},
            {path: 'view/Calculdindemnite', component: CalculDindemniteListeComponent},
            {path: 'view/CalculdindemniteAstreinte', component: AstreinteComponent},
            {path: 'view/CalculdindemniteGarde', component: GardeComponent},
            {path: 'view/user', component: UserComponent},
            {path: 'view/user/edit', component: UserEditComponent},
            {path: 'view/fonctionnaire', component: FonctionnaireComponent},
            {path: 'view/chefservice', component: ChefserviceComponent},
            {path: 'view/RAPPELR??GLEMENTAIRE', component: BoardUserComponent},
            //  {path: 'view/commande', component: CommandesComponent},
            {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
            {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
            {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
            {path: 'uikit/input', component: InputDemoComponent},
            {path: 'uikit/button', component: ButtonDemoComponent},
            {path: 'uikit/table', component: TableDemoComponent},
            {path: 'uikit/list', component: ListDemoComponent},
            {path: 'uikit/tree', component: TreeDemoComponent},
            {path: 'uikit/panel', component: PanelsDemoComponent},
            {path: 'uikit/overlay', component: OverlaysDemoComponent},
            {path: 'uikit/media', component: MediaDemoComponent},
            {path: 'uikit/menu', component: MenusDemoComponent},
            {path: 'uikit/message', component: MessagesDemoComponent},
            {path: 'uikit/misc', component: MiscDemoComponent},
            {path: 'uikit/charts', component: ChartsDemoComponent},
            {path: 'uikit/file', component: FileDemoComponent},
            {path: 'utilities/display', component: DisplayComponent},
            {path: 'utilities/elevation', component: ElevationComponent},
            {path: 'utilities/flexbox', component: FlexboxComponent},
            {path: 'utilities/grid', component: GridComponent},
            {path: 'utilities/icons', component: IconsComponent},
            {path: 'utilities/widgets', component: WidgetsComponent},
            {path: 'utilities/spacing', component: SpacingComponent},
            {path: 'utilities/typography', component: TypographyComponent},
            {path: 'utilities/text', component: TextComponent},
            {path: 'pages/crud', component: AppCrudComponent},
            {path: 'pages/calendar', component: AppCalendarComponent},
            {path: 'pages/timeline', component: AppTimelineDemoComponent},
            {path: 'pages/empty', component: EmptyDemoComponent},
            {path: 'documentation', component: DocumentationComponent}
        ]
    },
    // {path: 'error', component: AppErrorComponent},
    // {path: 'accessdenied', component: AppAccessdeniedComponent},
    // {path: '404', component: AppNotfoundComponent},
    // {path: 'login', component: AppLoginComponent},
    {path: '**', redirectTo: '/404'},
]





@NgModule({
    declarations: [],

    imports: [
        CommonModule,

        RouterModule.forRoot(routes),

        //     //{path:'',redirectTo:'/user/login',pathMatch:'full'},
        //     {
        //         path: 'user', component: AppMainComponent,
        //         children: [
        //             { path: 'registration', component: RegisterComponent },
        //             { path: 'login', component: LoginComponent }
        //         ]
        //     },
        //     // { path: 'home', component: HomeComponent },
        //     // { path: 'login', component: LoginComponent },
        //     // { path: 'register', component: RegisterComponent },
        //     // { path: 'profile', component: ProfileComponent },
        //     // { path: 'user', component: BoardUserComponent },
        //     // { path: 'admin', component: BoardAdminComponent },
        //     //  { path: '', redirectTo: 'home', pathMatch: 'full' },
        //
        //
        //     {path: '', component: AppMainComponent,
        //         children: [
        //            // {path: '', component: ProfileComponent},
        //             { path: 'registration', component: RegisterComponent },
        //             { path: 'login', component: LoginComponent },
        //             {path: 'view/listegarde', component: ListegardeComponent,canActivate:[AuthGuard]},
        //             {path: 'view/listegardevalider', component: ValidatelisteComponent,canActivate:[AuthGuard]},
        //
        //             {path: 'view/fonctionnaire', component: FonctionnaireComponent,canActivate:[AuthGuard]},
        //             {path: 'view/chefservice', component: ChefserviceComponent,canActivate:[AuthGuard]},
        //           //  {path: 'view/commande', component: CommandesComponent},
        //             {path: 'uikit/formlayout', component: FormLayoutDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/floatlabel', component: FloatLabelDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/invalidstate', component: InvalidStateDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/input', component: InputDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/button', component: ButtonDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/table', component: TableDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/list', component: ListDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/tree', component: TreeDemoComponent,canActivate:[AuthGuard]},
        //             {path: 'uikit/panel', component: PanelsDemoComponent},
        //             {path: 'uikit/overlay', component: OverlaysDemoComponent},
        //             {path: 'uikit/media', component: MediaDemoComponent},
        //             {path: 'uikit/menu', component: MenusDemoComponent},
        //             {path: 'uikit/message', component: MessagesDemoComponent},
        //             {path: 'uikit/misc', component: MiscDemoComponent},
        //             {path: 'uikit/charts', component: ChartsDemoComponent},
        //             {path: 'uikit/file', component: FileDemoComponent},
        //             {path: 'utilities/display', component: DisplayComponent},
        //             {path: 'utilities/elevation', component: ElevationComponent},
        //             {path: 'utilities/flexbox', component: FlexboxComponent},
        //             {path: 'utilities/grid', component: GridComponent},
        //             {path: 'utilities/icons', component: IconsComponent},
        //             {path: 'utilities/widgets', component: WidgetsComponent},
        //             {path: 'utilities/spacing', component: SpacingComponent},
        //             {path: 'utilities/typography', component: TypographyComponent},
        //             {path: 'utilities/text', component: TextComponent},
        //             {path: 'pages/crud', component: AppCrudComponent},
        //             {path: 'pages/calendar', component: AppCalendarComponent},
        //             {path: 'pages/timeline', component: AppTimelineDemoComponent},
        //             {path: 'pages/empty', component: EmptyDemoComponent},
        //             {path: 'documentation', component: DocumentationComponent}
        //         ]
        //     },
        //     // {path: 'error', component: AppErrorComponent},
        //     // {path: 'accessdenied', component: AppAccessdeniedComponent},
        //     // {path: '404', component: AppNotfoundComponent},
        //     // {path: 'login', component: AppLoginComponent},
        //     {path: '**', redirectTo: '/404'},
        // ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
