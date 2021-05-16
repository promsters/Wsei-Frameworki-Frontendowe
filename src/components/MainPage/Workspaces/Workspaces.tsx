import React, {useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";

import typeImage from "./entities.svg";
import workspaceHeaderImage from "./signing.jpg";
import {BorderRadius} from "../../../styledHelpers/Border";
import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import ScrollContainer from "react-indiana-drag-scroll";

const List = styled(ScrollContainer)`
    display: flex;
    flex-direction: row;
    
    > *:not(:first-child) {
        margin-left: 10px;
    }
`;

const Workspace = styled.div`
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
    return(
        <div>
            <MainPageBlockHeader>Workspaces</MainPageBlockHeader>
            <List vertical={false} hideScrollbars={false}>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
                <Workspace>
                    <HeaderRow/>
                    <TitleRow>
                        <div>
                            <img src={typeImage}/>
                        </div>
                        <h2>Client contract</h2>
                    </TitleRow>
                    <DescRow>
                        <span>Contract</span>
                        <span>150 users</span>
                    </DescRow>
                    <UpdateRow>
                        Last update 2 days ago
                    </UpdateRow>
                </Workspace>
            </List>
        </div>
    );
};

export default Workspaces;
