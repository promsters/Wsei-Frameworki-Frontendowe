import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {Button} from "../../Utils/Button";

import {Colors} from "../../../styledHelpers/Colors";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {BorderRadius} from "../../../styledHelpers/Border";

import UserApi from "../../../api/User";
import {User} from "../../../entities/User";

const Container = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 0px 5px 0px 5px;
`;

const AuthorAvatar = styled.img`
    width: 15px;
    height: 15px;
    border-radius: ${BorderRadius.roundAvatar};
    margin-right: 5px;
`;

const AuthorLabel = (props: AuthorLabelProps) => {
    const [state, setState] = useState<UserState>({loading: true} as UserState);

    useEffect(() => {
        UserApi.getUserData(props.userId)
            .then(user => setState({loading: false, user: user}));
    }, []);

    return(
        <span>
            {state.loading && <span>Loading...</span>}
            {!state.loading &&
                <Container>
                    <AuthorAvatar src={state.user.avatar}/>
                    {state.user.name}
                </Container>
            }
        </span>
    );
};

interface UserState {
    loading: boolean;
    user: User;
}

interface AuthorLabelProps {
    userId: number;
}

export default AuthorLabel;
