import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { searchWordApi } from '../services/searchWord';
import dataListReducer from '../services/dataListSlice';

export const store = configureStore({
  reducer: {
    [searchWordApi.reducerPath]: searchWordApi.reducer,
    dataList: dataListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchWordApi.middleware),
});

setupListeners(store.dispatch);
