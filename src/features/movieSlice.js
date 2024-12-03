import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('https://reactnative.dev/movies.json');
    return response.data.movies;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState:{
        items : [],
        status: 'idle',
        error: null,
    },

    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMovies.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchMovies.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default movieSlice.reducer;