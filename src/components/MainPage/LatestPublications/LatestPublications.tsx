import React, {useEffect, useState} from "react";

import styled from "styled-components";

import {BorderRadius} from "../../../styledHelpers/Border";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {media} from "../../../styledHelpers/Breakpoints";

import LatestBixBg from "./skyscrappers.jpg";
import {Colors} from "../../../styledHelpers/Colors";
import AuthorLabel from "../../Account/AuthorLabel/AuthorLabel";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${BorderRadius.box};
    box-shadow: ${BoxShadow.box};
    
    ${media.desktop`
        flex-direction: row;
    `}
    
    
`;
const LatestBig = styled.div`
    flex: 0 0 30%;
    
    background: linear-gradient(0deg, rgba(0,0,0,0.87718837535014) 0%, rgba(45,45,45,0.8267682072829132) 11%, rgba(0,212,255,0) 100%), url(${LatestBixBg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: ${Colors.white};
    border-radius: ${BorderRadius.boxLeft};
`;
const LatestList = styled.div`
    margin: 5px 20px 5px 20px;
    padding: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3 {
        margin: 0;
    }
    
    a {
        margin-top: 10px;
        color: ${Colors.blue};
        font-weight: bold;
    }
`;
const LatestRecord = styled.div`
    margin-top: 10px;
    display: flex;
    
    > img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
    
    h4 {
        margin: 0;
        font-weight: 500;
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const DateSpan = styled.span`
    color: ${Colors.grayBlue};
`;

const LatestPublications = () => {
    const [state, setState] = useState<LatestPublicationsState>({loading: true} as LatestPublicationsState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setState({loading: false, publications: json})
            })
        ;
    }, []);

    return(
        <div>
            {!state.loading && (
                <Container>
                    <LatestBig>
                        <h3>{state.publications[0].title}</h3>
                        <span>
                            <DateSpan>7 jan 2020</DateSpan>
                            <AuthorLabel userId={state.publications[0].userId}/>
                        </span>
                    </LatestBig>
                    <LatestList>
                        <h3>Latest publications</h3>
                        {state.publications.slice(1, 4).map((publication) => (
                            <LatestRecord key={publication.id}>
                                <img src={LatestBixBg} alt={"Photo"}/>
                                <div>
                                    <h4>{publication.title}</h4>
                                    <span>
                                        <DateSpan>7 jan 2020</DateSpan>
                                        <AuthorLabel userId={publication.userId}/>
                                    </span>
                                </div>
                            </LatestRecord>
                        ))}
                        <Link to={"/not-found"}>See more publications</Link>
                    </LatestList>
                </Container>
            )}
        </div>
    );
};

interface LatestPublicationsState {
    loading: boolean;
    publications: Publiction[];
}

interface Publiction {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default LatestPublications;
