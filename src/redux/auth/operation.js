import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}` 
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = `` 
}