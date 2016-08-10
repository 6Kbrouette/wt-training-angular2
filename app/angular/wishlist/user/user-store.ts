import {User} from './user'

interface IUserStore {

    /**
     * Add user to list.
     * @param user
     */
    addUser(user: User): void; // 2nd step

    /**
     * Remove user from list.
     * @param user
     */
    removeUser(user: User): void; // 3rd step

    /**
     * Return users list.
     */
    userList(): User[]; // 1st step

}

export class UserStore implements IUserStore {

    private _userList: User[] = [];

    addUser(user: User): void {
        this._userList.push(user);
    }
    removeUser(user: User): void {
        this._userList = this._userList.filter(userIterator => !userIterator.isEqual(user));
    }

    replaceUser(user: User, newUser: User): void {
        this._userList = this._userList.map(userIterator => (userIterator.isEqual(user) ? newUser : userIterator));
    }

    userList(): User[] {
        return this._userList;
    }

}