import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
       await axios.post('/contacts', text);
      thunkAPI.dispatch(fetchContact())
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      thunkAPI.dispatch(fetchContact());
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
