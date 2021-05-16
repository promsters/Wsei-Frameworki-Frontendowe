import React, {ChangeEvent, useEffect, useState} from "react";

import styled from "styled-components";
import {MainPageBlockHeader} from "../../../styledHelpers/Headers";
import {BorderRadius} from "../../../styledHelpers/Border";
import {BoxShadow} from "../../../styledHelpers/BoxShadow";
import {Colors} from "../../../styledHelpers/Colors";
import PostApi, {Comment} from "../../../api/Post";
import Pagination from "../../Utils/Pagination/Pagination";

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

const Element = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    padding: 7px 15px 7px 15px;
    border-radius: ${BorderRadius.boxSmall};
    box-shadow: ${BoxShadow.box};
    
    h4 {
        margin: 0;
        color: ${Colors.blue};
        font-weight: 500;
    }
    
    p {
        margin: 5px 0 5px 0;
        font-size: 15px;
        color: ${Colors.grayBlue};
    }
    
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`;


const List = styled.div`

`;


const ElementFooter = styled.div`
    display: flex;
    
    > span:not(:last-child):after {
        content: '\\00b7';
        padding: 0 5px 0 5px;
    }
`;

const ResumeWork = () => {
    const [comments, setComments] = useState<CommentsState>({
        loaded: false,
        sourceList: [],
        resultList: [],
        page: 1,
        perPage: 5
    });

    const getTotalPages = (): number => {
        return Math.ceil(comments.resultList.length/comments.perPage);
    };

    const onPageChangeHandler = (newPage: number) => {
        setComments({...comments, ...{page: newPage}});
    };

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

            <List>
                {comments.loaded && comments.resultList.slice((comments.page-1)*comments.perPage, comments.page*comments.perPage).map((comment: Comment) => (
                    <Element>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                        <ElementFooter>
                            <span>
                                {comment.email}
                            </span>
                            <span>
                                Corporate
                            </span>
                            <span>
                                Updated 3 days ago by John Doe
                            </span>
                        </ElementFooter>
                    </Element>
                ))}

            </List>
            {comments.loaded &&
                <Pagination pageCount={getTotalPages()} nextLabel={"NEXT"} previousLabel={"PREVIOUS"}
                            onPageChange={onPageChangeHandler}/>
            }
        </div>
    );
};

interface CommentsState {
    loaded: boolean;
    sourceList: Comment[];
    resultList: Comment[];
    page: number;
    perPage: number;
}

export default ResumeWork;
