import React from "react";
import EntitiesList from "./List/EntitiesList";
import {useSelector} from "react-redux";
import {IState} from "../../reducers";
import {Photo} from "../../entities/Photo";

const EntitiesContainer = () => {
    const photos = useSelector((state: IState) => state.photos);
    const filtersState = useSelector((state: IState) => state.entitiesList.filters);
    const optionsState = useSelector((state: IState) => state.entitiesList.options);

    const getFilteredEntities = (): Photo[] => {
        if (photos.loading) {
            return [];
        }

        return photos.photos
            .filter((element: Photo) => {
                return (
                    filtersState.keyword !== null
                        ? (element.album.title.indexOf(filtersState.keyword) !== -1)
                        : true
                );
            })
            .sort((a: Photo, b: Photo): number => {
                return a.album.title.localeCompare(b.album.title) * (filtersState.sort === 'asc' ? 1 : -1);
            })
    };

    return (
      <>
          <EntitiesList
              entities={getFilteredEntities()}
              displayType={optionsState.displayType}
              fullscreen={optionsState.fullscreen}
          />
      </>
    );
};

export default EntitiesContainer;
