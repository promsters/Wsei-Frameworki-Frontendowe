import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";

import ContactDetails from "./ContactDetails/ContactDetails";

import {IState} from "../../reducers";
import {Colors} from "../../styledHelpers/Colors";
import SkillDetails from "./SkillDetails/SkillDetails";

const Container = styled.div`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grayLight};
`;

interface InnerContainerProps {
    border: boolean;
}

const InnerContainer = styled.div<InnerContainerProps>`
    display: flex;
    
    padding: 10px;
    
   ${props => props.border && `border-top: 1px solid ${Colors.grayLight}`}
`;

const AvatarBox = styled.div`
    flex: 1 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    
    img {
        width: 60px;
        height: auto;
        border-radius: 100px;
    }
`;

const ShowProfileLink = styled(Link)`
    color: ${Colors.blue};
`;

const ProfileManagement = () => {
    const userState = useSelector((state: IState) => state.user);
    const dispatch = useDispatch();

    return(
        <Container>
            {!userState.loading &&
                <>
                    <InnerContainer border={false}>
                        <AvatarBox>
                            <img src={userState.user.avatar} alt={"profile photo"} />
                            <ShowProfileLink to={"/profile"}>See profile</ShowProfileLink>
                        </AvatarBox>
                        <ContactDetails/>
                    </InnerContainer>
                    <InnerContainer border={true}>
                        <SkillDetails/>
                    </InnerContainer>
                </>
            }
        </Container>
    );
};

export default ProfileManagement;
