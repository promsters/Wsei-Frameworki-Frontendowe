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

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  
  th {
    width: 16.6%;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    color: #232c47;
  }
  
  td {
    width: 16.6%;
    max-width: 0;
    padding: 5px;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  color: #519aac;
  font-size: 18px;
`;

const Proposals = () => {
        return (
        <div>
            <Header>Proposals</Header>
            <StyledTable>
                <tr>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Date</th>
                    <th>Firm</th>
                </tr>
                <tr>
                    <td>Operation Times New Roman</td>
                    <td>Renault Corporation</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/01/2018</td>
                    <td>Racine</td>
                </tr>
                <tr>
                    <td>Op. Promtheus</td>
                    <td>Renault HQ</td>
                    <td>USA</td>
                    <td>#M&A</td>
                    <td>18/02/2019</td>
                    <td>Clifford chance</td>
                </tr>
                <tr>
                    <td>Op. Latandre</td>
                    <td>Renault Brasil</td>
                    <td>Italia</td>
                    <td>#Social</td>
                    <td>18/02/2019</td>
                    <td>SVZ</td>
                </tr>
            </StyledTable>
            <Container>
                <StyledLink to={"#"}>See more proposals</StyledLink>
            </Container>
        </div>
    );
};

export default Proposals;
