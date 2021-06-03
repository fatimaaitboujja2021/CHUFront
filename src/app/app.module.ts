import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppCodeModule} from './app.code.component'
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppRightMenuComponent} from './app.right-menu.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {WidgetsComponent} from './utilities/widgets.component';

import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {MenuService} from './app.menu.service';
import {CustomerService} from './demo/service/customerservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {IconService} from './demo/service/iconservice';
import { CommandeCreateComponent } from './view/admin/commandes/commande-create/commande-create.component';
import { CommandesComponent } from './view/admin/commandes/commandes.component';
import { CommandeListComponent } from './view/admin/commandes/commande-list/commande-list.component';
import { CommandeEditComponent } from './view/admin/commandes/commande-edit/commande-edit.component';
import { CommandeViewComponent } from './view/admin/commandes/commande-view/commande-view.component';
import {FonctionnaireCreateComponent} from './view/admin/Fonctionnaire/Fonctionnaire-create/fonctionnaire-create.component';
import {RouterModule} from '@angular/router';
import {FonctionnaireComponent} from './view/admin/Fonctionnaire/fonctionnaire.component';
import {FonctionnaireEditComponent} from './view/admin/Fonctionnaire/Fonctionnaire-edit/fonctionnaire-edit.component';
import {FonctionnaireViewComponent} from './view/admin/Fonctionnaire/Fonctionnaire-view/fonctionnaire-view.component';
import {FonctionnaireListComponent} from './view/admin/Fonctionnaire/Fonctionnaire-list/fonctionnaire-list.component';
import {ChefserviceComponent} from './view/admin/Chefservice/chefservice.component';
import {ChefserviceViewComponent} from './view/admin/Chefservice/Chefservice-view/chefservice-view.component';
import {ChefserviceListComponent} from './view/admin/Chefservice/Chefservice-list/chefservice-list.component';
import {ChefserviceEditComponent} from './view/admin/Chefservice/Chefservice-edit/chefservice-edit.component';
import {ChefserviceCreateComponent} from './view/admin/Chefservice/Chefservice-create/chefservice-create.component';
import {ListegardeComponent} from './view/chefservice/listegarde/listegarde.component';
import { ListegardeCreateComponent } from './view/chefservice/listegarde/listegarde-create/listegarde-create.component';
import { ListegardeListComponent } from './view/chefservice/listegarde/listegarde-list/listegarde-list.component';
import {ListegardeEditComponent} from './view/chefservice/listegarde/listegarde-edit/listegarde-edit.component';
import {ListegardeViewComponent} from './view/chefservice/listegarde/listegarde-view/listegarde-view.component';
import {ListegardePreparerComponent} from './view/chefservice/listegarde/listegarde-preparer/listegarde-preparer.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ValidatelisteShowComponent } from './view/Validateliste/validateliste-show/validateliste-show.component';
import { ValidatelisteComponent } from './view/validateliste/validateliste.component';
import { ProfileComponent } from './view/chefservice/profile/profile.component';
import {NgxPrintModule} from 'ngx-print';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import { ToastrModule } from 'ngx-toastr';

import {BoardUserComponent} from './RAPPEL-RÉGLEMENTAIRE/board-user.component';
import {UserComponent} from './view/admin/utilisateurs/user.component';
import { UtilisateurCreateComponent } from './view/admin/utilisateurs/utilisateur-create/utilisateur-create.component';
import {UserEditComponent} from './view/admin/utilisateurs/user-edit/user-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { FonctionnaireChefComponent } from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef.component';
import { FonctionnaireChefCreateComponent } from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef-create/fonctionnaire-chef-create.component';
import { FonctionnaireChefEditComponent } from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef-edit/fonctionnaire-chef-edit.component';
import { FonctionnaireChefListComponent } from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef-list/fonctionnaire-chef-list.component';
import { FonctionnaireChefViewComponent } from './view/chefservice/fonctionnaire-chef/fonctionnaire-chef-view/fonctionnaire-chef-view.component';
import { CheckattendanceComponent } from './view/chefservice/listegarde/checkattendance/checkattendance.component';
import { ListedepresenceComponent } from './view/chefservice/listegarde/checkattendance/listedepresence/listedepresence.component';
import { ListedepresencecreateComponent } from './view/chefservice/listegarde/checkattendance/listedepresencecreate/listedepresencecreate.component';
import { ListedepresenceEditComponent } from './view/chefservice/listegarde/checkattendance/listedepresence-edit/listedepresence-edit.component';
import { ListedepresenceViewComponent } from './view/chefservice/listegarde/checkattendance/listedepresence-view/listedepresence-view.component';
import {ListeastreinteListComponent} from './view/chefservice/listegarde/listeastreinte-list/listeastreinte-list.component';
import { CalculDindemniteListeComponent } from './view/chefservice/calculDindemnite/calcul-dindemnite-liste/calcul-dindemnite-liste.component';
import { AstreinteComponent } from './view/chefservice/calculDindemnite/calculDindemniteListeFonctionnaires/astreinte/astreinte.component';
import { GardeComponent } from './view/chefservice/calculDindemnite/calculDindemniteListeFonctionnaires/garde/garde.component';
import {Fonctionnaire} from './controller/model/fonctionnaire.model';
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPrintModule,
        ToastrModule.forRoot({
            progressBar: true
           }),



    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        DisplayComponent,
        ElevationComponent,
        FlexboxComponent,
        GridComponent,
        IconsComponent,
        SpacingComponent,
        TypographyComponent,
        TextComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        WidgetsComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        CommandeCreateComponent,
        CommandesComponent,
        CommandeListComponent,
        CommandeEditComponent,
        CommandeViewComponent,
        FonctionnaireCreateComponent,
        FonctionnaireComponent,
        FonctionnaireEditComponent,
        FonctionnaireListComponent,
        FonctionnaireViewComponent,
        ChefserviceCreateComponent,
        ChefserviceEditComponent,
        ChefserviceListComponent,
        ChefserviceViewComponent,
        ChefserviceComponent,
        ListegardeComponent,
        ListegardeCreateComponent,
        ListegardeListComponent,
        ListegardeEditComponent,
        ListegardeViewComponent,
        ListegardePreparerComponent,
        ValidatelisteShowComponent,
        ValidatelisteComponent,
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        BoardAdminComponent,
        BoardUserComponent,
        UserComponent,
        UtilisateurCreateComponent,
        UserEditComponent,
        LogoutComponent,
        FonctionnaireChefComponent,
        FonctionnaireChefCreateComponent,
        FonctionnaireChefEditComponent,
        FonctionnaireChefListComponent,
        FonctionnaireChefViewComponent,
        CheckattendanceComponent,
        ListedepresenceComponent,
        ListedepresencecreateComponent,
        ListedepresenceEditComponent,
        ListedepresenceViewComponent,
        ListeastreinteListComponent,
        CalculDindemniteListeComponent,
        AstreinteComponent,
        GardeComponent

    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService,{provide: LOCALE_ID, useValue: 'fr' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
