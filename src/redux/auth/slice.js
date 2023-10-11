import { createSlice } from "@reduxjs/toolkit";
import { registerAuth,logInAuth,logOut } from "./operation";

const handlPenging = state => {
    state.isLoading = true;
}

const handleRejected = (state,action) => {
    state.isLoading = false;
    state.error = action.payload
}

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading:false,
    error:null
  };

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:{
        [registerAuth.pending]:handlPenging,
        [registerAuth.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
            state.isLoading = false
        },
        [registerAuth.rejected]:handleRejected,
        [logInAuth.pending]:handlPenging,
        [logInAuth.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false
        },
        [logInAuth.rejected]:handleRejected,
        [logOut.pending]:handlPenging,
        [logOut.fulfilled](state){
            state.user = {name:null,email:null};
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        [logOut.rejected]:handleRejected,
    }
})
export const authReducer = authSlice.reducer