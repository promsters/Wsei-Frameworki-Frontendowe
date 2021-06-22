import React, {MouseEvent, useState} from "react";
import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";
import classNames from "classnames";

interface PaginationProps {
    pageCount: number;
    previousLabel: string;
    nextLabel: string;
    onPageChange: Function;
    maxVisiblePages?: number;
}

const Container = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    
    span {
        color: ${Colors.blue};
        cursor: pointer;
        
        &.active {
            color: ${Colors.black};
            cursor: inherit;
        }
    }
`;

interface PaginationState {
    currentPage: number;
}

const Pagination = (props: PaginationProps) => {
    const [state, setState] = useState<PaginationState>({currentPage: 1});

    const onPageClickHandler = (event: MouseEvent<HTMLSpanElement>) => {
        const element = event.currentTarget;

        if (element.classList.contains('active')) {
            return;
        }

        const page = parseInt(element.dataset.page as string);

        props.onPageChange(page);
        setState({currentPage: page})
    };

    return (
        <Container>
            {state.currentPage > 1 && (
                <span data-page={state.currentPage-1} onClick={onPageClickHandler}>{props.previousLabel}</span>
            )}
            {Array.from({length: Math.min((props.maxVisiblePages ?? 20), props.pageCount)}, (_, i) => {
                const start = (state.currentPage-((props.maxVisiblePages ?? 20)/2));
                return i + (start > 0 ? start : 1);
            }).map((x) => (
                <span
                    data-page={x}
                    className={classNames({active: state.currentPage === x})}
                    onClick={onPageClickHandler}
                >
                    {x}
                </span>
            ))}
            {state.currentPage < props.pageCount && (
                <span data-page={state.currentPage+1} onClick={onPageClickHandler}>{props.nextLabel}</span>
            )}
        </Container>
    );
};

export default Pagination;
