import React from "react";
import styled from "styled-components";
import {Colors} from "../../../../styledHelpers/Colors";

import {Link} from "react-router-dom";

import homeIcon from "./home.svg";
import peopleIcon from "./people.svg";
import entitiesIcon from "../../SideBar/entities2.svg";
import administrationIcon from "./administration.svg";
import privacyIcon from "./privacy.svg";
import {useSelector} from "react-redux";
import {IState} from "../../../../reducers";
import {Workspace} from "../../../../entities/Workspace";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    > div {
        padding: 5px;        
        flex: 1 1 100%;
    }
`;

const Header = styled.div`
    color: ${Colors.grayBlue};
    font-size: 14px;
    font-weight: 500;
`;

const FilterRow = styled.div`
    input {
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
    }
`;

const FilterContainer = styled.div`
    overflow-y: scroll;
    max-height: 250px;
    
    border-bottom: 1px solid ${Colors.grayLight};
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
    
    &:hover {
        background-color: ${Colors.grayLight};
    }
`;

const LogoutButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    color: ${Colors.grayBlue};
    cursor: pointer;
    
    border-top: 1px solid ${Colors.grayLight};
`;

const InnerMenu = () => {
    const workspaces = useSelector((state: IState) => state.workspaces.workspaces);

    return(
        <Container>
            <FilterRow>
                <input type={"text"} placeholder={"Filter..."}/>
            </FilterRow>
            <FilterContainer>
                <Header>Platform</Header>
                <StyledLink to={"/"}>
                    <img src={homeIcon} />Home
                </StyledLink>
                <StyledLink to={"/not-found"}>
                    <img src={homeIcon} />Publications
                </StyledLink>
                <StyledLink to={"/not-found"}>
                    <img src={peopleIcon} />People
                </StyledLink>
                <StyledLink to={"/entities"}>
                    <img src={entitiesIcon} />Entities
                </StyledLink>
                <StyledLink to={"/not-found"}>
                    <img src={administrationIcon} />Administration
                </StyledLink>
                <Header>Workspaces</Header>
                {workspaces.map((workspace: Workspace) => (
                    <StyledLink key={workspace.id} to={`/workspace/${workspace.slug}`}><img src={entitiesIcon} />{workspace.name}</StyledLink>
                ))}
            </FilterContainer>
            <Header>Account</Header>
            <StyledLink to={"/not-found"}>
                <img src={privacyIcon} />Privacy
            </StyledLink>
            <StyledLink to={"/not-found"}>
                <img src={privacyIcon} />Settings
            </StyledLink>
            <LogoutButton>
                Logout
            </LogoutButton>
        </Container>
    );
};

export default InnerMenu;
