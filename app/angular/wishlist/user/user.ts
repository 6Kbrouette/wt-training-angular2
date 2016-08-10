
type UserSchema = {firstName?: string, lastName?: string, birthday?: Date, email?: string};

export class User {
    firstName: string;
    lastName:  string;
    birthday:  Date;
    email:     string;

    constructor({firstName = null, lastName = null, email = null, birthday = null}: UserSchema) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
    }

    isEqual(user: User) {
        return this === user;
    }
}
