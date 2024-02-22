import { combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

const rootReducer = combineReducers({
    books: bookSlice.reducer,
    //другие срезы состояний
    //...
});

export default rootReducer;
