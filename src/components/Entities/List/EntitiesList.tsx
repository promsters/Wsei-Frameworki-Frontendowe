import React, {useState} from "react";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import Pagination from "../../Utils/Pagination/Pagination";

import styled, {css} from "styled-components";
import EntitiesFilters from "../Filters/EntitiesFilters";
import {Colors} from "../../../styledHelpers/Colors";

const Container = styled.div<{fullscreen: boolean}>`
    ${props => props.fullscreen && css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        padding: 20px;
        box-sizing: border-box;
        background-color: ${Colors.white};
    `}
`;

const EntitiesContainer = styled.div<{list: boolean}>`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  
  ${props => props.list && css`
    ${Entity} {
      flex: 0 1 100%;
      height: 60px;
      
      ${EntityImage} {
        flex: 0 0 10%;
      }
      
      img {
        width: auto;
        height: 100%;
      } 
     
      h1, span {
        max-width: none;
      }
    }
  `};
`;

const Entity = styled.div`
  flex: 0 0 calc(25% - 2px - 15px);
  border: 1px solid #f4f4f6;
  border-radius: 20px;
  background-color: ${Colors.white};
  
  padding: 5px;
  
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
  }
  
  h1 {
    color: #2a3f9d;
    font-size: 15px;
    margin: 2px;
  }
  
  h1, span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 150px;
  }
  
  span {
    font-size: 13px;
  }
`;

const EntityImage = styled.div`
  flex: 0 0 30%;
`;

const EntitiesList = () => {
    const ITEMS_PER_PAGE = 30;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const photos = useSelector((state: IState) => state.photos);
    const filtersState = useSelector((state: IState) => state.entitiesList.filters);

    const getTotalPages = (): number => {
        return Math.ceil(photos.photos.length/ITEMS_PER_PAGE);
    }

    const onPageChangeHandler = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <Container fullscreen={filtersState.fullscreen}>
            <EntitiesFilters />
            <EntitiesContainer list={filtersState.displayType === 'list'}>
            {photos.photos.slice(currentPage*ITEMS_PER_PAGE, (currentPage+1)*ITEMS_PER_PAGE).map((photo) => (
                <Entity key={photo.id}>
                    <EntityImage>
                        <img src={photo.thumbnailUrl} />
                    </EntityImage>
                    <div>
                        <h1>{photo.album.title}</h1>
                        <span>{photo.title}</span>
                    </div>
                </Entity>
            ))}
            </EntitiesContainer>
            {!photos.loading &&
                <Pagination pageCount={getTotalPages()} maxVisiblePages={10} nextLabel={"NEXT"} previousLabel={"PREVIOUS"}
                            onPageChange={onPageChangeHandler}/>
            }
        </Container>
    );
};

export default EntitiesList;
