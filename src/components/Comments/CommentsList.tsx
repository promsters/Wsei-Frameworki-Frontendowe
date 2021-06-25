import React, {useState} from "react";

import {Comment} from "../../api/Post";

import Pagination from "../Utils/Pagination/Pagination";

import styled from "styled-components";

import {BorderRadius} from "../../styledHelpers/Border";
import {BoxShadow} from "../../styledHelpers/BoxShadow";
import {Colors} from "../../styledHelpers/Colors";
import AuthorLabel from "../Account/AuthorLabel/AuthorLabel";
import WorkspaceIcon from "../Workspace/WorkspaceIcon";
import {WorkspaceType} from "../../entities/Workspace";


const Element = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    padding: 7px 15px 7px 15px;
    border-radius: ${BorderRadius.boxSmall};
    box-shadow: ${BoxShadow.boxSm};
    
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


interface CommentsListProps {
    comments: Comment[];
    perPage: number;
}

const CommentsList = (props: CommentsListProps) => {
    const [page, setPage] = useState(1);

    const getTotalPages = (): number => {
        return Math.ceil(props.comments.length/props.perPage);
    };

    const onPageChangeHandler = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <>
            <List>
                {props.comments.slice((page-1)*props.perPage, page*props.perPage).map((comment: Comment) => {
                    const enumValues = Object.values(WorkspaceType);
                    const workspaceType = enumValues[Math.floor(Math.random() * enumValues.length)];

                    return (
                    <Element key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                        <ElementFooter>
                            <span>
                                <AuthorLabel userId={comment.postId}/>
                            </span>
                            <span>
                                <WorkspaceIcon type={workspaceType} size={"sm"} color={Colors.grayMedium3}/>
                                {workspaceType}
                            </span>
                            <span>
                                Updated 3 days ago by John Doe
                            </span>
                        </ElementFooter>
                    </Element>
                    )})}

            </List>
            <Pagination pageCount={getTotalPages()} nextLabel={"NEXT"} previousLabel={"PREVIOUS"}
                        onPageChange={onPageChangeHandler}/>
        </>
    )
};

export default CommentsList;
