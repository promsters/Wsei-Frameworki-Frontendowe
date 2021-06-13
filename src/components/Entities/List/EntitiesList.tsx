import React, {useState} from "react";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import Pagination from "../../Utils/Pagination/Pagination";

const EntitiesList = () => {
    const ITEMS_PER_PAGE = 30;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const photos = useSelector((state: IState) => state.photos);

    const getTotalPages = (): number => {
        return Math.ceil(photos.photos.length/ITEMS_PER_PAGE);
    }

    const onPageChangeHandler = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div>
            {photos.photos.slice(currentPage*ITEMS_PER_PAGE, (currentPage+1)*ITEMS_PER_PAGE).map((photo) => (
                <p key={photo.id}>{photo.title}</p>
            ))}
            {!photos.loading &&
                <Pagination pageCount={getTotalPages()} nextLabel={"NEXT"} previousLabel={"PREVIOUS"}
                            onPageChange={onPageChangeHandler}/>
            }
        </div>
    );
};

export default EntitiesList;
