import {Comment} from "../api/Post";

export type WorkspaceType = "Corporate" | "Contract" | "Norms";

export interface Workspace {
    id: number;
    name: string;
    slug: string;
    people: number;
    type: WorkspaceType;
    lastUpdated: string;
    comments: Comment[];
    commentsLoading: boolean;
}
