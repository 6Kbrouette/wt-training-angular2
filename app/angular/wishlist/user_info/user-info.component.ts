import {Component, Input} from '@angular/core';
import {User} from "../user/user";

@Component({
    selector: 'wt-user-info',
    templateUrl: require('./user-info.component.html'),
})
export class UserInfoComponent{
    @Input() user: User;
}