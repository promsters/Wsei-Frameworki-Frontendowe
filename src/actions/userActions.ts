import {Dispatch} from "redux";
import * as actionTypes from './actionTypes/userTypes';
import UserApi from "../api/User";
import {User} from "../entities/User";


export const getUser = (userId: number) => async (dispatch: Dispatch) => {
    UserApi.getUserData(userId).then((user: User) => {
        dispatch({
            type: actionTypes.GET_USER,
            payload: user
        })
    })
};
