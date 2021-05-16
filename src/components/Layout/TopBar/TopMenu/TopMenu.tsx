import React, {useState} from "react";
import styled from "styled-components";
import homeIcon from "./home.svg";
import {DownArrow} from "../../../../styledHelpers/Arrow";
import InnerMenu from "./InnerMenu";
import {media} from "../../../../styledHelpers/Breakpoints";
import {Colors} from "../../../../styledHelpers/Colors";

const MenuContainer = styled.div`
    position: relative;
    height: 100%;
    width: 20%;
`;

const MenuPointer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    
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

const MenuContent = styled.div`
    width: 100vw;
    position: fixed;
    top: 32px;
    left: 0;
    
    height: 100vh;
    
    border: 1px solid ${Colors.grayLight};
    background-color: ${Colors.white};
    
    ${media.desktop`
        position: absolute;
        width: 70%;
        left: initial;
        right: 0;
        height: auto;
    `}
`;

const TopMenu = () => {
    const [state, setState] = useState<MenuState>({open: false});

    const clickHandler = () => {
        setState({open: !state.open});
    };

    return(
        <MenuContainer>
            <MenuPointer onClick={clickHandler}>
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
                <DownArrow/>
            </MenuPointer>
            {state.open && (
                <MenuContent>
                    <InnerMenu/>
                </MenuContent>
            )}
        </MenuContainer>
    );
};

interface MenuState {
    open: boolean;
}

export default TopMenu;
