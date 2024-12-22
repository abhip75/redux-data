import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data;
});

const albumSlice = createSlice({

    name: 'albumData',
    initialState:{
        albums:[],
        status: 'idle',
        error: null,
    },

    reducer:{},
    extraReducers:(builder) => {

        builder
        .addCase(fetchAlbums.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAlbums.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.albums = action.payload;
        })
        .addCase(fetchAlbums.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default albumSlice.reducer;