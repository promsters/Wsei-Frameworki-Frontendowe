import React, {FC} from "react";
import styled from "styled-components";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import {Colors} from "../../styledHelpers/Colors";
import {media} from "../../styledHelpers/Breakpoints";

const Body = styled.div``;

const Flex = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
`;

const StyledSideBar = styled(SideBar)`
    display: none;
    width: 25%;
    
    ${media.desktop`
        display: block;
    `}
`;

const Content = styled.div`
    width: 100%;
    
    ${media.desktop`
        width: 75%;
    `}
`;

const MainWrapper: FC = ({children}) => {
    return(
        <Body>
            <TopBar/>
            <Flex>
                <StyledSideBar/>
                <Content>
                    {children}
                </Content>
            </Flex>
        </Body>
    );
};

export default MainWrapper;
