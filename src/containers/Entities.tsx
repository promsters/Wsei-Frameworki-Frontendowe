import React from "react";

import styled from "styled-components";

import {Colors} from "../styledHelpers/Colors";
import EntitiesContainer from "../components/Entities/EntitiesContainer";

const Container = styled.div`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grayLight};
    padding: 20px;
`;

const Entities = () => {
    return(
        <Container>
            <EntitiesContainer />
        </Container>
    )
}

export default Entities;
