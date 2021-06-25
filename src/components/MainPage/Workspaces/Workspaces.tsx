import React, {useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

import {BorderRadius} from "../../../styledHelpers/Border";
import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import ScrollContainer from "react-indiana-drag-scroll";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {Workspace} from "../../../entities/Workspace";
import {Link} from "react-router-dom";
import WorkspaceIcon from "../../Workspace/WorkspaceIcon";

const List = styled(ScrollContainer)`
    display: flex;
    flex-direction: row;
    
    > *:not(:first-child) {
        margin-left: 10px;
    }
`;

const WorkspaceElement = styled.div`
    width: 24%;
    min-width: 240px;
    border-radius: ${BorderRadius.box};
    background-color: ${Colors.white};
`;

const HeaderRow = styled.div<{bgImage: string}>`
    background: url(${props => props.bgImage}) 50%;
    background-size: cover;
    height: 80px;
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
        margin: -20px 0 0 10px;
        
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    h2 {
        margin: 5px 0 0 8px;
        font-size: 15px;
    }
`;

const DescRow = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    
    color: ${Colors.grayMedium3};
    
    padding: 10px 0 5px 15px;
    font-size: 14px;
    
    span {
      display: flex;
      gap: 5px;
      align-items: center;
    }
`;

const UpdateRow = styled.div`
    font-size: 11px;
    color: ${Colors.grayBlue};
    padding: 5px 0 5px 15px;
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
                            <HeaderRow bgImage={workspace.headerImage}/>
                            <TitleRow>
                                <div>
                                    <WorkspaceIcon type={workspace.type} size={"3x"} color={Colors.grayMedium}/>
                                </div>
                                <h2>{workspace.name}</h2>
                            </TitleRow>
                            <DescRow>
                                <span>
                                    <WorkspaceIcon type={workspace.type} size={"sm"} color={Colors.grayMedium3}/>
                                    {workspace.type}
                                </span>
                                <span>&bull;</span>
                                <span>
                                    <FontAwesomeIcon icon={faUsers} size={"sm"} color={Colors.grayMedium3} />
                                    {workspace.people} users
                                </span>
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
