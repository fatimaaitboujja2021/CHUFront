import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";
import {User} from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = environment.urlBase + environment.urlUser +'/';
    private _items: Array<User>;
    private _selected: User;
    private _selectes: Array<User>;

    // private _itemsFonctionnaire: Array<Fonctionnaire>;
    // private _selectedFonctionnaire: Fonctionnaire;
    // private _selectesFonctionnaire: Array<Chefservice>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {
    // }
    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.url);
    }


    // public save(): Observable<User> {
    //     return this.http.post<User>(this.url, this.selected);
    // }

    public edit(): Observable<User> {
        return this.http.put<User>(this.url, this.selected);
    }

    public deleteByUsername(): Observable<number> {
        return this.http.delete<number>(this.url + 'username/' + this.selected.username);
    }

    public deleteMultipleByUsername(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-username' , this.selectes);
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes){
            this.deleteIndexById(item.id);
        }
    }

    get items(): Array<User> {
        return this._items;
    }

    set items(value: Array<User>) {
        this._items = value;
    }

    get selected(): User {
        return this._selected;
    }

    set selected(value: User) {
        this._selected = value;
    }

    get selectes(): Array<User> {
        return this._selectes;
    }

    set selectes(value: Array<User>) {
        this._selectes = value;
    }


    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }
}
