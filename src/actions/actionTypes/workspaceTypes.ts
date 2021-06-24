import {Workspace} from "../../entities/Workspace";
import {Comment} from "../../api/Post";

export const GET_WORKSPACE_COMMENTS = 'GET_WORKSPACE_COMMENTS';

export interface IWorkspaceType {
    GET_WORKSPACE_COMMENTS: {
        workspace: Workspace;
        comments: Comment[];
    }
}
