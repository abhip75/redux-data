import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
    reducer : {
        movies: movieReducer,
        userData: userReducer,
        productData: productReducer
    }
});