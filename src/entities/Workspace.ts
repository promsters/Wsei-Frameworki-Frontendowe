import {Comment} from "../api/Post";

export enum WorkspaceType {
    "Corporate" = "Corporate",
    "Contract" = "Contract",
    "Norms" = "Norms"
}


export interface Workspace {
    id: number;
    name: string;
    slug: string;
    people: number;
    type: WorkspaceType;
    lastUpdated: string;
    comments: Comment[];
    commentsLoading: boolean;
    headerImage: string;
}
