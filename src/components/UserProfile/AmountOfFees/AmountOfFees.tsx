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
  margin: 5px;
  
  th {
    width: 25%;
    text-align: left;
    color: #232c47;
  }
  
  td {
    width: 25%;
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

const AmountOfFees = () => {
        return (
        <div>
            <Header>Amount of fees</Header>
            <StyledTable>
                <tr>
                    <th>Year</th>
                    <th>Cost center</th>
                    <th>Total amount</th>
                    <th>Law firm</th>
                </tr>
                <tr>
                    <td>2019</td>
                    <td>CS 153</td>
                    <td>3 500€</td>
                    <td>Clifford chance</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>CS 153</td>
                    <td>9 500€</td>
                    <td>Linklaters</td>
                </tr>
                <tr>
                    <td>2017</td>
                    <td>CS 47</td>
                    <td>10 500€</td>
                    <td>Linklaters</td>
                </tr>
                <tr>
                    <td></td>
                    <td>CS 153</td>
                    <td>18 500€</td>
                    <td>Linklaters</td>
                </tr>
                <tr>
                    <td></td>
                    <td>CS 32</td>
                    <td>15 500€</td>
                    <td>Linklaters</td>
                </tr>
            </StyledTable>
        </div>
    );
};

export default AmountOfFees;
