import {Component} from '@angular/core';
import {User} from '../user/user';
import {UserStore} from '../user/user-store';
import {UserInfoComponent} from "../user_info/user-info.component";
import {UserFormComponent} from "../user_form/user-form.component";

@Component({
    directives: [
        UserInfoComponent,
        UserFormComponent
    ],
    selector: 'wt-user-list',
    templateUrl: require('./user-list.component.html')
})
export class UserListComponent {
    editedUser: User = null;
    userStore: UserStore = new UserStore();

    constructor() {
        this.userStore.addUser(new User({firstName: "lol1"}));
        this.userStore.addUser(new User({firstName: "lol2"}));
        this.userStore.addUser(new User({firstName: "lol3"}));
        this.userStore.addUser(new User({firstName: "lol4"}));
        this.userStore.addUser(new User({firstName: "lol5"}));
    }

    editUser(user) {
        this.editedUser = user;
        //this._buildForm();
    }

    removeUser(user) {
        this.userStore.removeUser(user);
    }

    abortEditing() {
        this.editedUser = null;
        //this._buildForm();
    }

    onAdd(user: User) {
        this.userStore.addUser(user);
    }

    onEdit(user: User) {
        this.userStore.replaceUser(this.editedUser, user);
        this.editedUser = null;
    }

    onAbort() {
        this.editedUser = null;
    }
}
