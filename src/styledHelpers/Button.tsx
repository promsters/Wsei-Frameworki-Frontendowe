import styled from "styled-components";
import {Colors} from "./Colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BoxShadow} from "./BoxShadow";

interface ButtonProps {
    color?: string;
    borderColor?: string;
    bgColor?: string;
    active: boolean;
    shadow?: boolean;
}

export const ButtonIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin: 0 5px 0 0;
`;


export const Button = styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    cursor: pointer;
    background-color: ${props => props.bgColor ? props.bgColor : Colors.lightBlue3};
    color: ${props => props.color ? props.color : Colors.blue};
    box-shadow: ${props => props.shadow ? BoxShadow.boxTiny : 'none'};
    padding: 7px;
    font-weight: bold;
    font-size: 12px;
    
    border-radius: 10%;
    
    > ${ButtonIcon}:not(:last-child) {
        margin-left: 0;
    }
    
    > ${ButtonIcon}:not(:first-child) {
        margin-right: 0;
    }
    
    border: 0 solid ${props => props.borderColor ? props.borderColor : 'transparent'};
    
    ${props => !props.active && `
        span {
            display: none;
        }
        
        ${ButtonIcon} {
            color: ${Colors.grayMedium};
        }
        
        background-color: ${Colors.white};
        border-width: 1px;
    `}
`;

export const ButtonGroup = styled.div`
    display: flex;
    
    > ${Button}:not(:last-child) {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    > ${Button}:not(:first-child) {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;
