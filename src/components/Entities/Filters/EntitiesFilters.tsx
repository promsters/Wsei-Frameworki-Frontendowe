import React from "react";

import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faThLarge, faBars, faSortDown, faEllipsisH, faSortAmountUp, faFilter, faShare, faExpandAlt} from "@fortawesome/free-solid-svg-icons";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";
import {Colors} from "../../../styledHelpers/Colors";

const Left = styled.div``;
const Right = styled.div``;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${Left} {
        display: flex;
        gap: 10px;
        align-items: center;
        
        font-weight: bold;
    }
`;

const SettingsIcon = styled(FontAwesomeIcon)`
    color: ${Colors.grayBlue};
    font-size: 13px;
    cursor: pointer;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin: 0 5px 0 5px;
`;

interface ButtonProps {
    color?: string;
    bgColor?: string;
}

const Button = styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    background-color: ${props => props.bgColor ? props.bgColor : Colors.lightBlue3};
    color: ${props => props.color ? props.color : Colors.blue};
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
`;

const SecondaryButton = styled(Button)`
    ${ButtonIcon} {
        color: ${Colors.grayMedium};
    }
    
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grayLight};
`;

const ButtonGroup = styled.div`
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

const FiltersRow = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Separator = styled.div`
  width: 1px;
  border-right: 1px solid #e8e8e8;
`;

const EntitiesFilters = () => {
    return (
        <div>
            <Header>
                <Left>
                    Entities
                    <SettingsIcon icon={faCog}/>
                </Left>
                <Right>
                    <ButtonGroup>
                    <Button>
                        <ButtonIcon icon={faThLarge} />
                        Mosaic
                    </Button>
                    <SecondaryButton>
                        <ButtonIcon icon={faBars} />
                    </SecondaryButton>
                    </ButtonGroup>
                </Right>
            </Header>
            <FiltersRow>
                <Button>
                    <ButtonIcon icon={faDotCircle} />
                    All
                    <ButtonIcon icon={faSortDown} />
                </Button>
                <Button bgColor={"transparent"}>
                    <ButtonIcon icon={faEllipsisH} />
                </Button>
                <Separator />
                <Button bgColor={"transparent"} color={"#96999e"}>
                    <ButtonIcon icon={faSortAmountUp} color={"#96999e"} />
                    Sort
                </Button>
                <Button bgColor={"transparent"} color={"#96999e"}>
                    <ButtonIcon icon={faFilter} color={"#96999e"} />
                    Filters
                </Button>
                <Separator />
                <Button bgColor={"transparent"} color={"#96999e"}>
                    <ButtonIcon icon={faExpandAlt} color={"#96999e"} />
                </Button>
                <Separator />
                <Button bgColor={"transparent"} color={"#96999e"}>
                    <ButtonIcon icon={faShare} color={"#96999e"} />
                    Share
                </Button>
            </FiltersRow>
        </div>
    );
};

export default EntitiesFilters;
