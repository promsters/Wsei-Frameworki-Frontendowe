import {User} from "../../entities/User";

export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export interface IUserType {
    GET_USER: {
        user: User;
    },
    UPDATE_USER: {
        data: object;
    },
    GET_ALL_USERS: {
        users: User[];
    }
}
