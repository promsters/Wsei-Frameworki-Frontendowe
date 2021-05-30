import {User} from "../../entities/User";

export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface IUserType {
    GET_USER: {
        user: User;
    },
    UPDATE_USER: {
        data: object;
    }
}
