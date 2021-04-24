import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

type ButtonProps = {
  title?: string;
  icon?: string;
  iconAlt?: string;
};


const StyledButton = styled.button`
    background-color: ${Colors.white};
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    display: flex;
    
    > img {
        padding: 2px 0px;
    }
    
    &:hover {
        background-color: ${Colors.grayLight};
    }
`;


export const Button = ({title, icon, iconAlt}: ButtonProps) => {
    return(
        <StyledButton>
            {icon !== null &&
                <img src={icon} alt={iconAlt}/>
            }
            {title}
        </StyledButton>
    );
};
