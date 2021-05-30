import React, {MouseEventHandler, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";

import {IState} from "../../../reducers";
import * as actionTypes from '../../../actions/actionTypes/userTypes';

import EditableTextList from "../Input/EditableTextList";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const EditButton = styled.div`
    position: absolute;
    right: 0;
    
    cursor: pointer;
`;

const Section = styled.div`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const Header = styled.div`
    color: ${Colors.grayBlue};
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    input[type="text"] {
        height: 20px;
    }
`;

const Item = styled.div`
    padding: 2px 10px 2px 10px;
    margin: 5px;
    background-color: ${Colors.lightBlue};
    color: ${Colors.lightBlue2};
    border-radius: 5px;
`;

const DeleteButton = styled(FontAwesomeIcon)`
    color: ${Colors.red};
    cursor: pointer;
    margin-left: 5px;
`;

const SkillDetails = () => {
    const [state, setState] = useState({editEnabled: false});
    const userState = useSelector((state: IState) => state.user);
    const dispatch = useDispatch();

    const dispatchPropertyUpdate = (stateSlice: object) => {
        dispatch({
            type: actionTypes.UPDATE_USER,
            payload: {
                data: stateSlice
            }
        });
    };

    const renderItem = (item: string, editEnabled: boolean, deleteClickHandler: MouseEventHandler) => {
        return (
            <Item>
                {item}
                {editEnabled && (
                    <DeleteButton icon={faTrashAlt} onClick={deleteClickHandler} />
                )}
            </Item>
        )
    };


        return (
        <>
            {!userState.loading &&
                <Container>
                    <EditButton onClick={() => {setState({editEnabled: !state.editEnabled})}}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </EditButton>
                    <Section>
                        <Header>Expertise</Header>
                        <Items>
                            <EditableTextList
                                values={userState.user.skills.expertise} itemRender={renderItem} edit={state.editEnabled}
                                onChange={(items) => {
                                    dispatchPropertyUpdate({skills: {expertise: items}});
                                }}
                            />
                        </Items>
                    </Section>
                    <Section>
                        <Header>Specialities</Header>
                        <Items>
                            <EditableTextList
                                values={userState.user.skills.specialities} itemRender={renderItem} edit={state.editEnabled}
                                onChange={(items) => {
                                    dispatchPropertyUpdate({skills: {specialities: items}});
                                }}
                            />
                        </Items>
                    </Section>
                    <Section>
                        <Header>Admission to practice law</Header>
                        <Items>
                            <EditableTextList
                                values={userState.user.skills.admissions} itemRender={renderItem} edit={state.editEnabled}
                                onChange={(items) => {
                                    dispatchPropertyUpdate({skills: {admissions: items}});
                                }}
                            />
                        </Items>
                    </Section>
                    <Section>
                        <Header>Counties</Header>
                        <Items>
                            <EditableTextList
                                values={userState.user.skills.counties} itemRender={renderItem} edit={state.editEnabled}
                                onChange={(items) => {
                                    dispatchPropertyUpdate({skills: {counties: items}});
                                }}
                            />
                        </Items>
                    </Section>
                </Container>
            }
        </>
    );
};

export default SkillDetails;
