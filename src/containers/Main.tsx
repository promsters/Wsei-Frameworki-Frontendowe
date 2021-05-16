import React from "react";
import MainWrapper from "../components/Layout/MainWrapper";
import LatestPublications from "../components/MainPage/LatestPublications/LatestPublications";
import Workspaces from "../components/MainPage/Workspaces/Workspaces";
import ResumeWork from "../components/MainPage/ResumeWork/ResumeWork";

const Main = () => {
    return(
        <>
            <LatestPublications/>
            <Workspaces/>
            <ResumeWork/>
        </>
    )
}

export default Main;
