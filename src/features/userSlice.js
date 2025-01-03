import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers  = createAsyncThunk('users/fetchUsers', async () => {

    const response = await axios.get('https://fakestoreapi.com/users');
    return response.data;
  
});

const userSlice = createSlice({

    name: 'userData',
    initialState:{
        users: [],
        status: 'idle',
        error: null,
    },

    reducer:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;