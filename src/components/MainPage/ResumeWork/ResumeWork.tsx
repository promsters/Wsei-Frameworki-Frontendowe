import React, {ChangeEvent, useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";
import {BorderRadius} from "../../../styledHelpers/Border";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {Colors} from "../../../styledHelpers/Colors";
import PostApi, {Comment} from "../../../api/Post";
import Pagination from "../../Utils/Pagination/Pagination";
import CommentsList from "../../Comments/CommentsList";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FilterInput = styled.input`
    padding: 3px;
    margin-right: 20px;
    outline: none;
    border: 1px solid black;
    border-radius: 3px;
`;

const FollowedButton = styled.button`

`;


const ResumeWork = () => {
    const [comments, setComments] = useState<CommentsState>({
        loaded: false,
        sourceList: [],
        resultList: []
    });

    const onFilterKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const keyword = event.currentTarget.value;

        let results: Comment[] = comments.sourceList.filter((comment: Comment) => {
            return comment.name.indexOf(keyword) > -1;
        });

        setComments({...comments, ...{resultList: results}});
    };

    useEffect(() => {
        PostApi.getAllUserPostComments(1).then((commentsData: Comment[]) => {
            setComments({...comments, ...{loaded: true, sourceList: commentsData, resultList: commentsData}});
        });
    }, []);

    return(
        <div>
            <Header>
                <MainPageBlockHeader>Resume your work</MainPageBlockHeader>
                <div>
                    <FilterInput placeholder={"Filter by title..."} onChange={onFilterKeywordChange} />
                    <FollowedButton>
                        Followed
                    </FollowedButton>
                </div>
            </Header>

            <CommentsList comments={comments.resultList} perPage={10} />
        </div>
    );
};

interface CommentsState {
    loaded: boolean;
    sourceList: Comment[];
    resultList: Comment[];
}

export default ResumeWork;
