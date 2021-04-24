import React, {FC} from "react";
import styled from "styled-components";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import {Colors} from "../../styledHelpers/Colors";

const Body = styled.div``;

const Flex = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
`;

const StyledSideBar = styled(SideBar)`
    width: 25%;
`;

const Content = styled.div`
    width: 75%;
    width: 75%;
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
