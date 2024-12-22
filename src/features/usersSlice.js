import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInformation = createAsyncThunk('user/fetchUserInformation', async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

const usersSlice = createSlice({

    name: 'user',
    initialState:{
        users: [],
        status: 'idle',
        error: null
    },

    reducers:{},
    extraReducers: (builder) => {

        builder
        .addCase(fetchUserInformation.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUserInformation.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(fetchUserInformation.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;