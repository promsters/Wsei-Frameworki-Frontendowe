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
  color?: string;
  bgColor?: string;
  borderColor?: string;
};


const StyledButton = styled.button<{bgColor: string, color: string, borderColor: string}>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    gap: 5px;
    
    > img {
        padding: 2px 0;
    }
    
    &:hover {
        background-color: ${Colors.grayLight};
    }
`;


export const Button = (props: ButtonProps) => {
    return(
        <StyledButton
            bgColor={props.bgColor ?? Colors.white}
            color={props.color ?? Colors.black}
            borderColor={props.borderColor ?? Colors.black}
        >
            {props.icon !== undefined &&
                <img src={props.icon} alt={props.iconAlt}/>
            }
            {props.fsIcon !== undefined &&
                <FontAwesomeIcon icon={props.fsIcon!} color={props.color ?? Colors.black} />
            }
            {props.title}
        </StyledButton>
    );
};
