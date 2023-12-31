import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}` 
}
const clearAuthHeader = () => {
    localStorage.clear();
    axios.defaults.headers.common.Authorization = `` 
}

export const registerAuth = createAsyncThunk(
    'auth/register',
    async(credentials,thunkAPI) => {
        try{
            const res = await axios.post('/users/signup',credentials)
            setAuthHeader(res.data.token)
            return res.data
        }catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const logInAuth = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });