import * as actionTypes from '../actions/actionTypes/workspaceTypes';
import {Workspace, WorkspaceType} from "../entities/Workspace";

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
            type: WorkspaceType.Contract,
            lastUpdated: '2 days ago',
            comments: [],
            commentsLoading: true,
            headerImage: 'https://www.munizzilaw.com/content/uploads/posts/120/5-things-to-consider-when-signing-a-contract.jpg'
        },
        {
            id: 2,
            name: 'Supplier contract',
            slug: 'supplier-contract',
            people: 3,
            type: WorkspaceType.Contract,
            lastUpdated: '5 days ago',
            comments: [],
            commentsLoading: true,
            headerImage: 'https://www.munizzilaw.com/content/uploads/posts/120/5-things-to-consider-when-signing-a-contract.jpg'
        },
        {
            id: 3,
            name: 'Corporate',
            slug: 'corporate',
            people: 130,
            type: WorkspaceType.Contract,
            lastUpdated: '32 days ago',
            comments: [],
            commentsLoading: true,
            headerImage: 'https://2iuddx2bbvyd177ma3mydy2j-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/corporate-meeting-room-with-video-conferencing-and-collaboration-tools-1080x675.jpg'
        },
        {
            id: 4,
            name: 'Group Norms',
            slug: 'group-norms',
            people: 21,
            type: WorkspaceType.Norms,
            lastUpdated: '1 hour ago',
            comments: [],
            commentsLoading: true,
            headerImage: 'https://images.techhive.com/images/article/2015/09/library-100616524-large.jpg'
        },
        {
            id: 5,
            name: 'Real estate contracts',
            slug: 'real-estate-contracts',
            people: 12,
            type: WorkspaceType.Contract,
            lastUpdated: '3 days ago',
            comments: [],
            commentsLoading: true,
            headerImage: 'https://www.munizzilaw.com/content/uploads/posts/120/5-things-to-consider-when-signing-a-contract.jpg'
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
