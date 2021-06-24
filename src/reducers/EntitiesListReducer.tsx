import * as actionTypes from '../actions/actionTypes/entitiesListTypes';
import {EntitiesFiltersState, EntitiesOptionsState} from "../entities/EntitiesList";

export interface IEntitiesListReducer {
    options: EntitiesOptionsState;
    filters: EntitiesFiltersState;
}

const defaultState = (): IEntitiesListReducer => ({
    options: {
        displayType: "mosaic",
        fullscreen: false
    },
    filters: {
        keyword: null,
        sort: "asc"
    }
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_OPTIONS: {
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.payload
                }
            }
        }

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
