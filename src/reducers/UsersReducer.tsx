import * as actionTypes from '../actions/actionTypes/userTypes';
import {User} from "../entities/User";

export interface IUsersReducer {
    users: User[];
    loading: boolean;
}

const defaultState = (): IUsersReducer => ({
    users: [],
    loading: true
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USER: {
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        }

        default: {
            return state;
        }
    }
};
