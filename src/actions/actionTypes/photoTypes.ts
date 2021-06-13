import {Photo} from "../../entities/Photo";

export const GET_PHOTOS = 'GET_PHOTOS';

export interface IUserType {
    GET_PHOTOS: {
        photos: Photo[];
    }
}
