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

        shuffleArray(photosData);

        return photosData;
    }
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default PhotoApi;
