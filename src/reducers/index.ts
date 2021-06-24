import {combineReducers} from "redux";

import user, {IUserReducer} from "./UserReducer";
import photos, {IPhotosReducer} from "./PhotosReducer";
import users, {IUsersReducer} from "./UsersReducer";
import entitiesList, {IEntitiesListReducer} from "./EntitiesListReducer";
import workspaces, {IWorkspacesReducer} from "./WorkspacesReducer";

export default combineReducers({
    user, users, photos, entitiesList, workspaces
})

export interface IState {
    user: IUserReducer,
    users: IUsersReducer,
    photos: IPhotosReducer,
    entitiesList: IEntitiesListReducer,
    workspaces: IWorkspacesReducer
}
