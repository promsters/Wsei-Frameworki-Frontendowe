import React, {ChangeEvent, useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";
import {BorderRadius} from "../../../styledHelpers/Border";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {Colors} from "../../../styledHelpers/Colors";
import PostApi, {Comment} from "../../../api/Post";
import Pagination from "../../Utils/Pagination/Pagination";
import CommentsList from "../../Comments/CommentsList";
import {SearchInput} from "../../../styledHelpers/SearchInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSatelliteDish, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Button as ButtonComponent} from "../../Utils/Button";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 10px 0;
    
    div {
      display: flex;
      gap: 20px;
    }
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
                    <SearchInput>
                        <input type={"text"} placeholder={"Filter by title..."} onChange={onFilterKeywordChange}/>
                        <FontAwesomeIcon icon={faSearch} />
                    </SearchInput>
                    <ButtonComponent title={"Followed"} fsIcon={faSatelliteDish} bgColor={Colors.transparent} color={Colors.blue2} borderColor={Colors.transparent}/>
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
