import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {Workspace} from "../../entities/Workspace";
import { Redirect } from "react-router-dom";
import {getWorkspaceComments} from "../../actions/workspaceActions";
import CommentsList from "../Comments/CommentsList";

interface WorkspaceViewProps {
    slug: string;
}

const WorkspaceView = (props: WorkspaceViewProps) => {
    const workspace = useSelector((state: IState) => state.workspaces.workspaces.find((workspace:Workspace) => workspace.slug === props.slug));
    const dispatch = useDispatch();

    useEffect(() => {
        if (workspace !== undefined) {
            console.log('test');
            dispatch(getWorkspaceComments(workspace));
        }
    }, [workspace!.id]);

    if (workspace === undefined) {
        return (<Redirect to={"/not-found"}/>)
    }

    return (
        <>
            <h1>{workspace.name}</h1>
            {!workspace.commentsLoading &&
                <CommentsList comments={workspace.comments} perPage={10} />
            }
        </>
    );
};

export default WorkspaceView;


