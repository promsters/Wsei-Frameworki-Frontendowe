import React from "react";

import styled, {css} from "styled-components";

import * as actionTypes from "../../../actions/actionTypes/entitiesListTypes";
import {Button as ButtonComponent} from "../../Utils/Button";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faThLarge, faBars, faSortDown, faEllipsisH, faSortAmountUp, faFilter, faShare, faExpandAlt, faSearch, faSatelliteDish} from "@fortawesome/free-solid-svg-icons";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";
import {Colors} from "../../../styledHelpers/Colors";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../../reducers";

const Left = styled.div``;
const Right = styled.div``;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    
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
    borderColor?: string;
    bgColor?: string;
    active: boolean;
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
    justify-content: space-between;
    margin-bottom: 10px;
`;

const FiltersLeftContainer = styled.div`
  display: flex;
`;

const FiltersRightContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 0 10px 0 0;
  
  input {
    padding: 10px;
    border: none;
    background-color: transparent;;
    
    &:focus {
      outline-width: 0;
    }
  }
`;

const Separator = styled.div<{margin?: boolean}>`
  width: 1px;
  border-right: 1px solid #e8e8e8;
  
  ${props => props.margin && css`
    margin: 0 10px 0 10px;
  `}
`;

const EntitiesFilters = () => {
    const filtersState = useSelector((state: IState) => state.entitiesList.filters);
    const dispatch = useDispatch();

    const onDisplayTypeChange = () => {
        dispatch({
            type: actionTypes.UPDATE_FILTERS,
            payload: {displayType: filtersState.displayType === 'mosaic' ? 'list' : 'mosaic'}
        })
    };

    const onFullscreenChange = () => {
        dispatch({
            type: actionTypes.UPDATE_FILTERS,
            payload: {fullscreen: !filtersState.fullscreen}
        })
    }

    return (
        <div>
            <Header>
                <Left>
                    Entities
                    <SettingsIcon icon={faCog}/>
                </Left>
                <Right>
                    <ButtonGroup>
                    <Button active={filtersState.displayType === 'mosaic'} borderColor={Colors.grayLight} onClick={onDisplayTypeChange}>
                        <ButtonIcon icon={faThLarge} />
                        <span>Mosaic</span>
                    </Button>
                    <Button active={filtersState.displayType === 'list'} borderColor={Colors.grayLight} onClick={onDisplayTypeChange}>
                        <ButtonIcon icon={faBars} />
                        <span>List</span>
                    </Button>
                    </ButtonGroup>
                </Right>
            </Header>
            <FiltersRow>
                <FiltersLeftContainer>
                    <Button active={true}>
                        <ButtonIcon icon={faDotCircle} />
                        All
                        <ButtonIcon icon={faSortDown} />
                    </Button>
                    <Button active={false} bgColor={"transparent"}>
                        <ButtonIcon icon={faEllipsisH} />
                    </Button>
                    <Separator />
                    <Button active={false} bgColor={"transparent"} color={"#96999e"}>
                        <ButtonIcon icon={faSortAmountUp} color={"#96999e"} />
                        Sort
                    </Button>
                    <Button active={false} bgColor={"transparent"} color={"#96999e"}>
                        <ButtonIcon icon={faFilter} color={"#96999e"} />
                        Filters
                    </Button>
                    <Separator />
                    <Button active={false} bgColor={"transparent"} color={"#96999e"} onClick={onFullscreenChange}>
                        <ButtonIcon icon={faExpandAlt} color={"#96999e"} />
                    </Button>
                    <Separator />
                    <Button active={false} bgColor={"transparent"} color={"#96999e"}>
                        <ButtonIcon icon={faShare} color={"#96999e"} />
                        Share
                    </Button>
                </FiltersLeftContainer>
                <FiltersRightContainer>
                    <SearchInput>
                        <input type={"text"} placeholder={"Search ..."}/>
                        <FontAwesomeIcon icon={faSearch} />
                    </SearchInput>
                    <Separator margin={true} />
                    <ButtonComponent title={"Followed"} fsIcon={faSatelliteDish}/>
                </FiltersRightContainer>
            </FiltersRow>
        </div>
    );
};

export default EntitiesFilters;
