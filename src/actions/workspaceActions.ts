import {Dispatch} from "redux";
import * as actionTypes from './actionTypes/workspaceTypes';
import {Workspace} from "../entities/Workspace";
import PostApi, {Comment} from "../api/Post";

export const getWorkspaceComments = (workspace: Workspace) => async (dispatch: Dispatch) => {
    PostApi.getAllPostComments(workspace.id).then((comments: Comment[]) => {
        dispatch({
            type: actionTypes.GET_WORKSPACE_COMMENTS,
            payload: {
                workspace: workspace,
                comments: comments
            }
        })
    })
};


