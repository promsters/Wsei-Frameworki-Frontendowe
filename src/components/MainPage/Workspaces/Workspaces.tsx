import React, {useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";

import typeImage from "./entities.svg";
import workspaceHeaderImage from "./signing.jpg";
import {BorderRadius} from "../../../styledHelpers/Border";
import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import ScrollContainer from "react-indiana-drag-scroll";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {Workspace} from "../../../entities/Workspace";
import {Link} from "react-router-dom";

const List = styled(ScrollContainer)`
    display: flex;
    flex-direction: row;
    
    > *:not(:first-child) {
        margin-left: 10px;
    }
`;

const WorkspaceElement = styled.div`
    width: 24%;
    min-width: 200px;
    border-radius: ${BorderRadius.box};
    background-color: ${Colors.white};
`;

const HeaderRow = styled.div`
    background: url(${workspaceHeaderImage});
    background-size: cover;
    height: 60px;
    border-radius: ${BorderRadius.boxTop};
`;

const TitleRow = styled.div`
    display: flex;
    
    > div {
        border: 1px solid white;
        border-radius: ${BorderRadius.boxSmall};
        box-shadow: ${BoxShadow.box};
        background-color: ${Colors.white};
        padding: 10px;
        margin: 0 0 0px 10px;
        
        margin-top: -20px;
        
        img {
            width: 45px;
            height: 45px;
        }
    }
    
    h2 {
        margin: 5px 0 0 8px;
        font-size: 14px;
    }
`;

const DescRow = styled.div`
    display: flex;
    flex-direction: row;
    
    padding: 5px 0 5px 10px;
`;

const UpdateRow = styled.div`
    font-size: 11px;
    color: ${Colors.grayBlue};
    padding: 5px 0 5px 10px;
`;

const Workspaces = () => {
    const workspaces = useSelector((state: IState) => state.workspaces.workspaces);

    return(
        <div>
            <MainPageBlockHeader>Workspaces</MainPageBlockHeader>
            <List vertical={false} hideScrollbars={false}>
                {workspaces.map((workspace: Workspace) => (
                    <WorkspaceElement key={workspace.id}>
                        <Link to={`/workspace/${workspace.slug}`}>
                            <HeaderRow/>
                            <TitleRow>
                                <div>
                                    <img src={typeImage}/>
                                </div>
                                <h2>{workspace.name}</h2>
                            </TitleRow>
                            <DescRow>
                                <span>{workspace.type}</span>
                                <span>{workspace.people} users</span>
                            </DescRow>
                            <UpdateRow>
                                Last update {workspace.lastUpdated}
                            </UpdateRow>
                        </Link>
                    </WorkspaceElement>
                ))}
            </List>
        </div>
    );
};

export default Workspaces;
