

/**
 * Represents a user in the system.
 * 
 * @interface IUser
 * @extends Document
 */
export interface IUser {
    /**
     * The username of the user.
     * @type {string}
     */
    username: string;

    /**
     * The email address of the user.
     * @type {string}
     */
    email: string;

    _id: string
}