import * as actionTypes from '../actions/actionTypes/photoTypes';
import {Photo} from "../entities/Photo";

export interface IPhotosReducer {
    photos: Photo[];
    loading: boolean;
}

const defaultState = (): IPhotosReducer => ({
    photos: [],
    loading: true
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            return {
                ...state,
                loading: false,
                photos: action.payload
            }
        }

        default: {
            return state;
        }
    }
};
