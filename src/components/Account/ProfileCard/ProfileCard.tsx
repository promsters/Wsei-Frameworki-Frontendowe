import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";

import {Button} from "../../Utils/Button";

import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {BorderRadius} from "../../../styledHelpers/Border";

import networkIcon from "./network.png";
import networkAddIcon from "./network.svg";
import addIcon from "./plus.svg";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {getUser} from "../../../actions/userActions";


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
    padding: 20px 0 20px 0;
    
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
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        padding: 5px 10px;
        width: 100%;
    }
`;

const StyledProfileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileCard = () => {
    const userState = useSelector((state: IState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(6));
    }, []);

    return(
        <Container>
            {userState.loading && <div>Loading...</div>}
            {!userState.loading &&
                <Summary>
                    <StyledProfileLink to={"/profile"}>
                        <img src={userState.user.avatar} alt={"profile photo"}/>
                        <h1>{userState.user.name}</h1>
                    </StyledProfileLink>
                    <span>Job title - {userState.user.company.name}</span>
                </Summary>
            }
            <Links>
                <div>
                    <StyledLink to={"/network"}>
                        <img src={networkIcon} />
                        <span>Your network</span>
                    </StyledLink>
                    <Button icon={networkAddIcon} iconAlt={"Add user to network"} />
                </div>
                <div>
                    <StyledLink to={"/publications"}>
                        <img src={networkIcon} />
                        <span>Your Publications</span>
                    </StyledLink>
                    <Button icon={addIcon} iconAlt={"Add publication"} />
                </div>
            </Links>
        </Container>
    );
};

export default ProfileCard;
