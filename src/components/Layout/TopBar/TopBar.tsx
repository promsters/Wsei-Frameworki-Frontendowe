import React from "react";
import styled, {css} from "styled-components";
import logo from "./logo.png";
import TopMenu from "./TopMenu/TopMenu";

import homeIcon from "./house.svg";
import commentsIcon from "./comments.svg";
import notificationsIcon from "./bell.svg";

const Bar = styled.div`
    background-color: #fff;
    height: 30px;
    padding: 0 15px 0 15px;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    
    > img {
        width: auto;
        height: 100%;
    }
`;

const SearchInput = styled.input`
    width: 30%;
    margin-left: 20%;
`;

const UserIcons = styled.div`
    width: 10%;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 5px;
`;

const UserIcon = styled.div<{showNotif: boolean}>`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    > img {
        width: auto;
        height: 16px;
    }
    
    ${props => props.showNotif && css`
        background: #e8e8e8;
        border-radius: 50px;
    `}
    
    span {
        border-radius: 15px;
        background-color: blue;
        padding: 1px 5px 1px 5px;
        position: absolute;
        top: -3px;
        right: -3px;
        color: white;
        font-size: 8px;
    }
`;

const TopBar = () => {
    return(
        <Bar>
            <img src={logo}/>
            <TopMenu />
            <SearchInput type={"text"} placeholder={"Search Legalcluster"}  />
            <UserIcons>
                <UserIcon showNotif={false}>
                    <img src={homeIcon} />
                </UserIcon>
                <UserIcon showNotif={true}>
                    <span>3</span>
                    <img src={commentsIcon} />
                </UserIcon>
                <UserIcon showNotif={true}>
                    <span>5</span>
                    <img src={notificationsIcon} />
                </UserIcon>
            </UserIcons>
        </Bar>
    );
};

export default TopBar;
