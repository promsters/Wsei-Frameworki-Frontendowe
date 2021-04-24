import React from "react";
import styled from "styled-components";
import homeIcon from "./home.svg";
import {DownArrow} from "../../../../styledHelpers/Arrow";

const Menu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;
    
    img {
        width: auto;
        height: 80%;
    }
    span {
        margin-left: 20px;
    }
    
    ${DownArrow} {
        margin-left: auto;
    }
`;
const TopMenu = () => {
    return(
        <Menu>
            <img src={homeIcon} alt="Home" />
            <span>Home</span>
            <DownArrow/>
        </Menu>
    );
};

export default TopMenu;
