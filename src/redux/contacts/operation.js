import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const superMegaToken = JSON.parse(localStorage.getItem('persist:auth')).token
    const token = getState().auth.token
    if (superMegaToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}` 
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const contactsApi = createApi({
  reducerPath: 'ContactsApp',
  baseQuery,
  endpoints: builder => ({
    getContactsArry: builder.query({
      query: () => `contacts/`,
      providesTags: ['data']
    }),
    currentUser:builder.query({
      query: () => '/users/current',
        providesTags: ['data']
      
    }),
    setContact: builder.mutation({
      query: newContact => ({
        url:'contacts/',
        method:'POST',
        body:newContact,
      }),
      invalidatesTags: ['data']

    }),
    deleteContact: builder.mutation({
      query:contactId => ({
        url:`/contacts/${contactId}`,
        method:'DELETE',
      }),
      invalidatesTags: ['data']

    })
  }),
});

export const {useCurrentUserQuery ,useDeleteContactMutation,useGetContactsArryQuery,useSetContactMutation } = contactsApi;

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
      thunkAPI.dispatch(fetchContact());
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
