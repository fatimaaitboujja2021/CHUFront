import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UserService} from '../../../controller/service/user.service';
import {User} from '../../../controller/model/user.model';
import {AuthService} from '../../../_services/auth.service';
import {Commande} from '../../../controller/model/commande.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class UserComponent implements OnInit {
  cols: any[];
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  statuses: any[];

  constructor(private messageService: MessageService,private authService: AuthService,private confirmationService: ConfirmationService,
              private service: UserService,private router: Router) { }


  private getBoolean(value) {
    switch (value.enabled) {
      case true:
      case "true":
      case 1:
      case "1":
      case "on":
      case "yes":
        return true;
      default:
        return false;
    }

  }

  private getBoolean1(value) {
    switch (value.locked) {
      case true:
      case "true":
      case 1:
      case "1":
      case "on":
      case "yes":
        return true;
      default:
        return false;
    }

  }









  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data,

    );

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
    ];
  }

  private initCol() {
    this.cols = [
      {field: 'id', header: 'id'},
      {field: 'username', header: 'username'},
      {field: 'lastname', header: 'lastname'},
      {field: 'firstname', header: 'firstname'},
      {field: 'email', header: 'email'},
      {field: 'password', header: 'password'},
      {field: 'enabled', header: 'enabled'},
      {field: 'locked', header: 'locked'}


    ];
  }


  public edit(user: User) {
    this.router.navigateByUrl('view/user/edit');

    this.selected = {...user};
    this.editDialog = true;
  }
  public view(user: User) {
    this.selected = {...user};
    this.viewDialog = true;
  }

  get selected(): User {
    return this.service.selected;
  }

  set selected(value: User) {
    this.service.selected = value;
  }

  get items(): Array<User> {
    return this.service.items;
  }

  set items(value: Array<User>) {
    this.service.items = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<User> {
    return this.service.selectes;
  }

  set selectes(value: Array<User>) {
    this.service.selectes = value;
  }


  public openCreate() {
    this.form = new User();
    this.submitted = false;
    this.createDialog = true;
  }

  public save() {
    this.submitted = true;
    if (this.form.username.trim()) {
      this.authService.register(this.form).subscribe(data => {
            // this.items.push({...data});
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.service.findAll().subscribe(data => this.items = data);

            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'user Created',
              life: 3000
            });

            this.createDialog = false;
            this.selected = new User();
          }
          ,
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          });

    }
  }


  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected commandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByUsername().subscribe(data =>{
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.service.findAll().subscribe(data => this.items = data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commandes Deleted',
            life: 3000
          });
        });
      }
    });
  }


  public delete(selected: User) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByUsername().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new User();
          // this.service.findAll().subscribe(data => this.items = data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'user Deleted',
            life: 3000
          });
        });
      }
    });
  }











}
