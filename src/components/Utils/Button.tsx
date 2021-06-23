import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  title?: string;
  icon?: string;
  iconAlt?: string;
  fsIcon?: IconProp;
};


const StyledButton = styled.button`
    background-color: ${Colors.white};
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    gap: 5px;
    
    > img {
        padding: 2px 0px;
    }
    
    &:hover {
        background-color: ${Colors.grayLight};
    }
`;


export const Button = ({title, icon, iconAlt, fsIcon}: ButtonProps) => {
    return(
        <StyledButton>
            {icon !== null &&
                <img src={icon} alt={iconAlt}/>
            }
            {fsIcon !== null &&
                <FontAwesomeIcon icon={fsIcon!} />
            }
            {title}
        </StyledButton>
    );
};
