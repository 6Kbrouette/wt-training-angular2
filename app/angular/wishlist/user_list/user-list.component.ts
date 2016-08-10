import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup} from '@angular/common'
import {User} from '../user/user';
import {UserStore} from '../user/user-store';
import {UserInfoComponent} from "../user_info/user-info.component";

@Component({
    directives: [
        UserInfoComponent
    ],
    selector: 'wt-user-list',
    templateUrl: require('./user-list.component.html')
})
export class UserListComponent {
    editedUser: User = null;
    userStore: UserStore = new UserStore();

    firstNameControl: Control;
    lastNameControl: Control;
    emailControl: Control;
    birthdayControl: Control;
    userControlGroup: ControlGroup;

    constructor(private _builder: FormBuilder) {
        this._buildForm();
        this.userStore.addUser(new User({firstName: "lol1"}));
        this.userStore.addUser(new User({firstName: "lol2"}));
        this.userStore.addUser(new User({firstName: "lol3"}));
        this.userStore.addUser(new User({firstName: "lol4"}));
        this.userStore.addUser(new User({firstName: "lol5"}));
    }

    editUser(user) {
        this.editedUser = user;
        this._buildForm();
    }

    removeUser(user) {
        this.userStore.removeUser(user);
    }

    abortEditing() {
        this.editedUser = null;
        this._buildForm();
    }

    onSubmit() {
        if (this.editedUser) {
            this.userStore.replaceUser(this.editedUser, new User(this.userControlGroup.value));
            this.editedUser = null;
        }
        else {
            this.userStore.addUser(new User(this.userControlGroup.value));
        }
        this._buildForm();
    }

    private _buildForm() {

        this.firstNameControl = new Control(this.editedUser ? this.editedUser.firstName : null);
        this.lastNameControl = new Control(this.editedUser ? this.editedUser.lastName : null);
        this.emailControl = new Control(this.editedUser ? this.editedUser.email : null);
        this.birthdayControl= new Control(this.editedUser ? this.editedUser.birthday : null);

        this.userControlGroup = this._builder.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            birthdate: this.birthdayControl
        });

    }
}
