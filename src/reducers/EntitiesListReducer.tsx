import * as actionTypes from '../actions/actionTypes/entitiesListTypes';
import {EntitiesFiltersState} from "../entities/EntitiesList";

export interface IEntitiesListReducer {
    filters: EntitiesFiltersState;
}

const defaultState = (): IEntitiesListReducer => ({
    filters: {
        displayType: "mosaic",
        fullscreen: false
    }
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_FILTERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload
                }
            }
        }

        default: {
            return state;
        }
    }
};
