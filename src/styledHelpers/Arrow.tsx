import styled from "styled-components";

const Arrow = styled.i`
    border: solid ${props => props.color || "black"};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`;

const DownArrow = styled(Arrow)`
    transform: rotate(45deg);
`;

const UpArrow = styled(Arrow)`
    transform: rotate(-135deg);
`;

const LeftArrow = styled(Arrow)`
    transform: rotate(135deg);
`;

const RightArrow = styled(Arrow)`
    transform: rotate(-45deg);
`;

export {DownArrow, UpArrow, LeftArrow, RightArrow};
