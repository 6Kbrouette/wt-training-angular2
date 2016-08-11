import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {User} from "../user/user";
import {Control, ControlGroup, FormBuilder} from "@angular/common";

@Component({
    selector: 'wt-user-form',
    templateUrl: require('./user-form.component.html')
})
export class UserFormComponent implements OnChanges {
    @Input() user: User;
    @Output() userChange = new EventEmitter<User>();
    @Output() userAdd = new EventEmitter();
    @Output() userEdit = new EventEmitter();
    @Output() abortEdit = new EventEmitter();

    firstNameControl: Control;
    lastNameControl: Control;
    emailControl: Control;
    birthdayControl: Control;
    userControlGroup: ControlGroup;

    constructor(private _builder: FormBuilder) {
        this._buildForm(new User({}));
    }

    ngOnChanges(changes) {
        if (changes.user) {
            this._buildForm(this.user || new User({}));
       }
    }

    private _buildForm(user: User) {
        this.firstNameControl = new Control(user.firstName);
        this.lastNameControl = new Control(user.lastName);
        this.emailControl = new Control(user.email);
        this.birthdayControl= new Control(user.birthday);

        this.userControlGroup = this._builder.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            birthdate: this.birthdayControl
        });
    }

    onSubmit() {
        if (this.user) {
            this.userEdit.emit(new User(this.userControlGroup.value));
            this.user = null;
        }
        else {
            this.userAdd.emit(new User(this.userControlGroup.value));
        }
        this._buildForm(new User({}));
    }

    onAbort() {
        this.abortEdit.emit();
    }
}