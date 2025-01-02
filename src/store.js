import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";
import infoReducer from "./features/usersSlice";
import albumReducer from "./features/albumSlice";
import commentReducer from "./features/commentSlice";

export const store = configureStore({
    reducer : {
        movies: movieReducer,
        userData: userReducer,
        productData: productReducer,
        user: infoReducer,
        albumData: albumReducer,
        comment: commentReducer
    }
});