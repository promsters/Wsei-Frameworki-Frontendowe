import React from "react";

import styled, {css} from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {BorderRadius} from "../../../styledHelpers/Border";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div<{visible: boolean}>`
  position: absolute;
  top: 30px;
  left: 0;
  
  cursor: default;
  
  ${props => !props.visible && css`
    display: none;
  `};
  
  width: max-content;
  padding: 10px;
  background-color: ${Colors.white};
  border-radius: ${BorderRadius.boxSmall};
  box-shadow: ${BoxShadow.box};
`;

const StyledSelect = styled.select`
  border: none;
  background-color: transparent;
  
  font-size: 15px;
  color: ${Colors.grayBlue2};
  width: auto;
  
  &:focus {
    outline-width: 0;
  }
  
  cursor: pointer;
`;

const ConditionRow = styled.div`
  margin: 5px 5px 5px 20px;
  display: flex;
  
  align-items: center;
  gap: 20px;
  
  
  font-size: 15px;
  font-weight: 500;
  color: ${Colors.grayBlue2};
`;

const ConditionAddRow = styled(ConditionRow)`
  color: ${Colors.blue2};
  margin-top: 10px;
  cursor: pointer;
  
  ${StyledSelect} {
    color: ${Colors.blue2};
  }
`;

const ConditionType = styled.div`
  width: 60px;
`;



const StyledInput = styled.input`
  border: none;
  background-color: ${Colors.grayLight};
  padding: 5px;
  border-radius: ${BorderRadius.boxSmall};
  
  &:focus {
    outline-width: 0;
  }
`;

const FiltersModal = (props: {open: boolean}) => {
    return (
        <Wrapper visible={props.open}>
            Rows are filtered by the following conditions starting from the top.
            <ConditionRow>
                <FontAwesomeIcon icon={faTimes} size={"2x"} color={Colors.grayBlue2} />
                <ConditionType>Where</ConditionType>
                <StyledSelect>
                    <option>Company</option>
                    <option>Status</option>
                    <option>Job</option>
                    <option>Priority</option>
                </StyledSelect>
                <StyledSelect>
                    <option>Contains</option>
                    <option>Not Contains</option>
                    <option>Is Not</option>
                    <option>Is</option>
                </StyledSelect>
                <StyledInput type={"text"} placeholder={"Type..."}/>
            </ConditionRow>
            <ConditionRow>
                <FontAwesomeIcon icon={faTimes} size={"2x"} color={Colors.grayBlue2} />
                <ConditionType>Where</ConditionType>
                <StyledSelect>
                    <option>Company</option>
                    <option>Status</option>
                    <option>Job</option>
                    <option>Priority</option>
                </StyledSelect>
                <StyledSelect>
                    <option>Contains</option>
                    <option>Not Contains</option>
                    <option>Is Not</option>
                    <option>Is</option>
                </StyledSelect>
                <StyledInput type={"text"} placeholder={"Type..."}/>
                <StyledSelect>
                    <option>In</option>
                    <option>Not In</option>
                </StyledSelect>
                <StyledInput type={"text"} placeholder={"Entity..."}/>
            </ConditionRow>
            <ConditionRow>
                <FontAwesomeIcon icon={faTimes} size={"2x"} color={Colors.grayBlue2} />
                <ConditionType>And</ConditionType>
                <StyledSelect>
                    <option>Company</option>
                    <option>Status</option>
                    <option>Job</option>
                    <option>Priority</option>
                </StyledSelect>
                <StyledSelect>
                    <option>Contains</option>
                    <option>Not Contains</option>
                    <option>Is Not</option>
                    <option>Is</option>
                </StyledSelect>
                <StyledInput type={"text"} placeholder={"Type..."}/>
                <StyledSelect>
                    <option>In</option>
                    <option>Not In</option>
                </StyledSelect>
                <StyledInput type={"text"} placeholder={"Entity..."}/>
            </ConditionRow>
            <ConditionAddRow>
                <FontAwesomeIcon icon={faPlus} color={Colors.blue2} size={"lg"}/>
                Add filter
                <StyledSelect placeholder={""}>
                    <option>choose property...</option>
                    <option>Status</option>
                    <option>Company</option>
                    <option>Priority</option>
                </StyledSelect>
            </ConditionAddRow>
        </Wrapper>
    )
};

export default FiltersModal;
