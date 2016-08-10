import {Component} from '@angular/core';
import {UserListComponent} from "./user_list/user-list.component";

@Component({
    directives: [
        UserListComponent
    ],
    selector: 'wt-app',
    templateUrl: require('./wishlist.component.html'),
})
export class WishlistComponent {

}
