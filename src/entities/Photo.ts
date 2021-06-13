export interface Photo {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    album: PhotoAlbum;
    albumId: number;
}

export interface PhotoAlbum {
    id: number;
    userId: number;
    title: string;
}
