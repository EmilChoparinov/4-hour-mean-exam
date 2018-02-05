
// DEPENDENCIES
import { IUser } from '../interfaces/user';


/**
 * base user class that implements base IUser
 */
export class User implements IUser {
    _id: string;
    message?: string;
    name: string;
}
