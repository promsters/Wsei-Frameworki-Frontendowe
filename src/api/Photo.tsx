import {Photo} from "../entities/Photo";

class PhotoApi {
    static async getAllPhotos(): Promise<Photo[]> {
        const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const photosData = await photosResponse.json();

        const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const albumsData = await albumsResponse.json();

        photosData.map((photoData: Photo) => {
            return photoData.album = albumsData[photoData.albumId-1];
        });

        return photosData;
    }
}

export default PhotoApi;
