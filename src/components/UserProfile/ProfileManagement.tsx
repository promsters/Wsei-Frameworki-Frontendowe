import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";

import ContactDetails from "./ContactDetails/ContactDetails";

import {IState} from "../../reducers";
import {Colors} from "../../styledHelpers/Colors";
import SkillDetails from "./SkillDetails/SkillDetails";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faFile} from "@fortawesome/free-regular-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import PanelInformations from "./PanelInformations/PanelInformations";
import Proposals from "./Proposals/Proposals";
import InternalReviews from "./InternalReviews/InternalReviews";
import AmountOfFees from "./AmountOfFees/AmountOfFees";

const Container = styled.div`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grayLight};
    margin-bottom: 20px;
`;

interface InnerContainerProps {
    border: boolean;
    block?: boolean;
}

const InnerContainer = styled.div<InnerContainerProps>`
    display: ${props => (props.block ? 'block' : 'flex')};
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    
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

const TopLinks = styled.div`
    margin: 5px 10px 0 0;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    
    a {
        display: flex;
        gap: 5px;
        align-items: center;
        font-weight: 500;
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
                    <TopLinks>
                        <Link to={"/"}><FontAwesomeIcon icon={faComment}/>Message</Link>
                        <Link to={"/"}><FontAwesomeIcon icon={faFile}/>Create a request</Link>
                        <Link to={"/"}><FontAwesomeIcon icon={faBriefcase}/>Add to a cluster</Link>
                    </TopLinks>
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
                    <InnerContainer border={true} block={true}>
                        <PanelInformations/>
                    </InnerContainer>
                    <InnerContainer border={true} block={true}>
                        <Proposals/>
                    </InnerContainer>
                    <InnerContainer border={true} block={true}>
                        <InternalReviews/>
                    </InnerContainer>
                    <InnerContainer border={true} block={true}>
                        <AmountOfFees/>
                    </InnerContainer>
                </>
            }
        </Container>
    );
};

export default ProfileManagement;
