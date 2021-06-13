import {combineReducers} from "redux";

import user, {IUserReducer} from "./UserReducer";
import photos, {IPhotosReducer} from "./PhotosReducer";
import users, {IUsersReducer} from "./UsersReducer";

export default combineReducers({
    user, users, photos
})

export interface IState {
    user: IUserReducer,
    users: IUsersReducer,
    photos: IPhotosReducer
}
