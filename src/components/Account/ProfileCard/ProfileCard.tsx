import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {Button} from "../../Utils/Button";

import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {BorderRadius} from "../../../styledHelpers/Border";

import networkIcon from "./network.png";
import networkAddIcon from "./network.svg";
import addIcon from "./plus.svg";
import UserApi, {User} from "../../../api/User";


const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: ${Colors.white};
    border-radius: ${BorderRadius.box};
    box-shadow: ${BoxShadow.box};
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: ${Colors.grayBlue};
    padding: 20px 0px 20px 0px;
    
    border-bottom: 1px solid ${Colors.grayLight};
    
    img {
        width: 30%;
        height: auto;
        border-radius: 100px;
    }
    
    h1 {
        margin: 10px;
        color: ${Colors.blue};
        font-size: 20px;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 10px 5px 10px;
    
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            span {
                padding: 5px 10px;
                width: 100%;
            }
        }
    }
`;

interface UserState {
    loading: boolean;
    user: User;
}

const ProfileCard = () => {
    const userId = 6
    const [state, setState] = useState<UserState>({loading: true} as UserState);

    useEffect(() => {
        UserApi.getUserData(userId)
            .then(user => setState({loading: false, user: user}));
    }, []);

    return(
        <Container>
            {state.loading && <div>Loading...</div>}
            {!state.loading &&
                <Summary>
                    <img src={state.user.avatar} alt={"profile photo"}/>
                    <h1>{state.user.name}</h1>
                    <span>Job title - {state.user.company.name}</span>
                </Summary>
            }
            <Links>
                <div>
                    <a href={"#"}>
                        <img src={networkIcon} />
                        <span>Your network</span>
                    </a>
                    <Button icon={networkAddIcon} iconAlt={"Add user to network"} />
                </div>
                <div>
                    <a href={"#"}>
                        <img src={networkIcon} />
                        <span>Your Publications</span>
                    </a>
                    <Button icon={addIcon} iconAlt={"Add publication"} />
                </div>
            </Links>
        </Container>
    );
};

export default ProfileCard;
