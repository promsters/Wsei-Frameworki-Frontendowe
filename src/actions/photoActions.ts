import {Dispatch} from "redux";
import * as actionTypes from './actionTypes/photoTypes';
import PhotoApi from "../api/Photo";
import {Photo} from "../entities/Photo";

export const getPhotos = () => async (dispatch: Dispatch) => {
    PhotoApi.getAllPhotos().then((photos: Photo[]) => {
        dispatch({
            type: actionTypes.GET_PHOTOS,
            payload: photos
        })
    })
};
