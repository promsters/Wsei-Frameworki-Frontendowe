import {combineReducers} from "redux";

import user, {IUserReducer} from "./UserReducer";
import photos, {IPhotosReducer} from "./PhotosReducer";
import users, {IUsersReducer} from "./UsersReducer";
import entitiesList, {IEntitiesListReducer} from "./EntitiesListReducer";

export default combineReducers({
    user, users, photos, entitiesList
})

export interface IState {
    user: IUserReducer,
    users: IUsersReducer,
    photos: IPhotosReducer,
    entitiesList: IEntitiesListReducer
}
