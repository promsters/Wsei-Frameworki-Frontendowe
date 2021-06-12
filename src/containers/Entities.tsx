import React from "react";

import styled from "styled-components";

import EntitiesFilters from "../components/Entities/Filters/EntitiesFilters";
import EntitiesList from "../components/Entities/List/EntitiesList";
import {Colors} from "../styledHelpers/Colors";

const Container = styled.div`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grayLight};
    padding: 20px;
`;

const Entities = () => {
    return(
        <Container>
            <EntitiesFilters />
            <EntitiesList />
        </Container>
    )
}

export default Entities;
