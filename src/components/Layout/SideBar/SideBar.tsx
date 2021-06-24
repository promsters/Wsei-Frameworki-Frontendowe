import React from "react";
import styled from "styled-components";
import ProfileCard from "../../Account/ProfileCard/ProfileCard";

import {Link} from "react-router-dom";

import ecosystemIcon from "./ecosystem.svg";
import entityIcon from "./entities2.svg";

interface SideBarProps {
    className?: string;
}

const Links = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const StyledLink = styled(Link)`
    margin-left: 20px;
    display: flex;
    width: 100%;
    padding: 10px;
    
    img {
        margin-right: 10px;
    }
`;

const SideBar = ({className}: SideBarProps) => {
    return(
        <div className={className}>
            <ProfileCard />
            <Links>
                <StyledLink to={"/not-found"}>
                    <img src={entityIcon} />
                    <span>Publications</span>
                </StyledLink>
                <StyledLink to={"/not-found"}>
                    <img src={ecosystemIcon} />
                    <span>Ecosystem</span>
                </StyledLink>
                <StyledLink to={"/entities"}>
                    <img src={entityIcon} />
                    <span>Entities</span>
                </StyledLink>
            </Links>
        </div>
    );
};

export default SideBar;
