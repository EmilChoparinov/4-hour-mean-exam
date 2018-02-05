
/**
 * base user class that implements base IUser
 */
export class User implements IUser {
    name: string;
    _id: number;
}

/**
 * base implementation of IUser
 */
export interface IUser {
    name: string;
    _id: number;
}
