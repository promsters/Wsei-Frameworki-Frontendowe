import React from "react";

import { useParams } from 'react-router-dom';

import WorkspaceView from "../components/Workspace/WorkspaceView";

type WorkspaceParams = {
    slug: string;
}

const Workspace = () => {
    const { slug } = useParams<WorkspaceParams>();
    return(
        <>
            <WorkspaceView slug={slug} />
        </>
    )
}

export default Workspace;
