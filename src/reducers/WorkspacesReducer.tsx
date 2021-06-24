import * as actionTypes from '../actions/actionTypes/workspaceTypes';
import {Workspace} from "../entities/Workspace";

export interface IWorkspacesReducer {
    workspaces: Workspace[];
    loading: boolean;
}

const defaultState = (): IWorkspacesReducer => ({
    workspaces: [
        {
            id: 1,
            name: 'Client contract',
            slug: 'client-contract',
            people: 20,
            type: 'Contract',
            lastUpdated: '2 days ago',
            comments: [],
            commentsLoading: true
        },
        {
            id: 2,
            name: 'Supplier contract',
            slug: 'supplier-contract',
            people: 3,
            type: 'Contract',
            lastUpdated: '5 days ago',
            comments: [],
            commentsLoading: true
        },
        {
            id: 3,
            name: 'Corporate',
            slug: 'corporate',
            people: 130,
            type: 'Corporate',
            lastUpdated: '32 days ago',
            comments: [],
            commentsLoading: true
        },
        {
            id: 4,
            name: 'Group Norms',
            slug: 'group-norms',
            people: 21,
            type: 'Norms',
            lastUpdated: '1 hour ago',
            comments: [],
            commentsLoading: true
        },
        {
            id: 5,
            name: 'Real estate contracts',
            slug: 'real-estate-contracts',
            people: 12,
            type: 'Contract',
            lastUpdated: '3 days ago',
            comments: [],
            commentsLoading: true
        }
    ],
    loading: false
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_WORKSPACE_COMMENTS: {
            return {
                ...state,
                workspaces: state.workspaces.map((workspace) => {
                    if (workspace.id !== action.payload.workspace.id) {
                        return workspace;
                    }

                    return {
                        ...workspace,
                        comments: action.payload.comments,
                        commentsLoading: false
                    }
                })
            }
        }

        default: {
            return state;
        }
    }
};
