import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    fetchBookStart,
    fetchBookSuccess,
    fetchBookFailure,
} from "./bookSlice";
import axios from "axios";

const BookLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchBookStart());
            try {
                const response = await axios.get(
                    "https://openlibrary.org/subjects/magic.json"
                );
                const data = response.data.works;
                dispatch(fetchBookSuccess(data));
            } catch (error) {
                console.error("Ошибка при загрузке данных: ", error);
                dispatch(fetchBookFailure());
            }
        };
        fetchData(); //загрузка данных о книгах при рендере компонента
    }, [dispatch]);

    return (
        <div className="d-flex align-items-center">
            <h2>Book Library</h2>
        </div>
    );
};

export default BookLoader;
