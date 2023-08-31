import { configureStore } from "@reduxjs/toolkit";
//import {filterSlice,persistedReducer } from "./taskSlice";
import { contactReducer,filterReducer } from "./contacts/taskSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from "./auth/slice";
import  storage  from "redux-persist/lib/storage";
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
    reducer: {
        contacts:contactReducer,
        filter:filterReducer,
        auth:persistReducer(authPersistConfig,authReducer)
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)