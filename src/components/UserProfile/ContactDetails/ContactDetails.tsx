import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import {IState} from "../../../reducers";
import * as actionTypes from '../../../actions/actionTypes/userTypes';

import EditableText from "../Input/EditableText";

const Container = styled.div`
    width: 100%;
    position: relative;
`;

const EditButton = styled.div`
    position: absolute;
    right: 0;
    
    cursor: pointer;
`;

const DataGrid = styled.div`
    display: flex;
    align-items: flex-end;
    
    > div {
        flex: 1 0 50%;
    }
`;

const ContactDetails = () => {
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

    return (
        <>
            {!userState.loading &&
                <Container>
                    <EditButton onClick={() => {setState({editEnabled: !state.editEnabled})}}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </EditButton>
                    <DataGrid>
                        <div>
                            <div>
                                <EditableText
                                    value={userState.user.name}
                                    onChange={(event) => {dispatchPropertyUpdate({name: event.currentTarget.value});}}
                                    edit={state.editEnabled}
                                />
                            </div>
                            <div>
                                <EditableText
                                    value={userState.user.company.name}
                                    onChange={(event) => {dispatchPropertyUpdate({company: {name: event.currentTarget.value}});}}
                                    edit={state.editEnabled}
                                />
                            </div>
                            <div>
                                <EditableText
                                    value={userState.user.address.city}
                                    onChange={(event) => {dispatchPropertyUpdate({address: {city: event.currentTarget.value}});}}
                                    edit={state.editEnabled}
                                />
                            </div>
                            <div>Partner</div>
                        </div>
                        <div>
                            <div>
                                <EditableText
                                    value={userState.user.email}
                                    onChange={(event) => {dispatchPropertyUpdate({email: event.currentTarget.value});}}
                                    edit={state.editEnabled}
                                />
                            </div>
                            <div>
                                <EditableText
                                    value={userState.user.phone}
                                    onChange={(event) => {dispatchPropertyUpdate({phone: event.currentTarget.value});}}
                                    edit={state.editEnabled}
                                />
                            </div>
                        </div>
                    </DataGrid>
                </Container>
            }
        </>
    );
};

export default ContactDetails;
