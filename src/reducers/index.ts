import {combineReducers} from "redux";

import user, {IUserReducer} from "./UserReducer";

export default combineReducers({
    user
})

export interface IState {
    user: IUserReducer
}
