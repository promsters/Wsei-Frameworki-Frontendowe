import styled from "styled-components";
import {Colors} from "./Colors";

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 0 10px 0 0;
  background-color: ${Colors.white};
  
  input {
    padding: 10px;
    border: none;
    background-color: transparent;
    
    &:focus {
      outline-width: 0;
    }
  }
`;
