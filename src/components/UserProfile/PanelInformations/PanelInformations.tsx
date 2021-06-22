import React from "react";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faFile, faUser} from "@fortawesome/free-regular-svg-icons";
import AuthorLabel from "../../Account/AuthorLabel/AuthorLabel";
import {Link} from "react-router-dom";

const Header = styled.div`
  font-weight: 500;
  padding: 5px 0 5px 5px;
  font-size: 15px;
`;

const Block = styled.div`
  padding: 3px 0 3px 5px;
`;

const SubHeader = styled.div`
  color: #767575;
  padding: 2px 0 2px 0;
  font-size: 14px;
`;

const SubHeader2 = styled(SubHeader)`
  color: #050505;
  font-weight: 500;
`;

const Text = styled.div`
  padding: 2px 0 2px 0;
  font-size: 13px;
`;

const BlockGray = styled(Block)`
  margin: 2px 0 2px 0;
  padding: 3px 5px 3px 5px;
  background-color: #f5f7f9;
  color: #232c47;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 13px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Corespondent = styled(BlockGray)`
  justify-content: left;
  > span {
    flex: 0 0 20%;
  }
`;

const PanelInformations = () => {
        return (
        <div>
            <Header>Panel informations</Header>
            <Block>
                <SubHeader>Hourly fee</SubHeader>
                <Text>610€/hour (Negociated)</Text>
            </Block>
            <Block>
                <SubHeader>Terms & conditions</SubHeader>
                <Text>Monthly 10k€ retainer - see with Jeanny Smith</Text>
                <BlockGray>
                    <FontAwesomeIcon icon={faFile} size={"sm"}/>
                    Attachement lorem-ipsum-a8124124.jpg
                </BlockGray>
            </Block>
            <Block>
                <SubHeader2>Services & projects</SubHeader2>
                <Text>Corporate M&A and international acquisitions</Text>
            </Block>
            <Block>
                <SubHeader2>Internal correspondants</SubHeader2>
                <Corespondent>
                    <AuthorLabel userId={1}/>
                    <StyledLink to={"#"}>
                        <FontAwesomeIcon icon={faComment}/>
                        Message
                    </StyledLink>
                    <StyledLink to={"#"}>
                        <FontAwesomeIcon icon={faUser}/>
                        Profile
                    </StyledLink>
                </Corespondent>
                <Corespondent>
                    <AuthorLabel userId={2}/>
                    <StyledLink to={"#"}>
                        <FontAwesomeIcon icon={faComment}/>
                        Message
                    </StyledLink>
                    <StyledLink to={"#"}>
                        <FontAwesomeIcon icon={faUser}/>
                        Profile
                    </StyledLink>
                </Corespondent>
            </Block>
        </div>
    );
};

export default PanelInformations;
