import { configureStore } from "@reduxjs/toolkit";
import { contactReducer,filterReducer } from "./contacts/taskSlice";
import {
  persistStore,
  persistReducer,

} from 'redux-persist';
import { contactsApi } from "./contacts/operation";
import { setupListeners } from '@reduxjs/toolkit/query'

import { authReducer } from "./auth/slice";
import  storage  from "redux-persist/lib/storage";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};
export const store = configureStore({
    reducer: {
        contacts:contactReducer,
        filter:filterReducer,
        auth:persistReducer(authPersistConfig,authReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (customizedMiddleware) =>[
   ...customizedMiddleware({
    serializableCheck: false,
   }),

   contactsApi.middleware

]})
setupListeners(store.dispatch)
export const persistor = persistStore(store)