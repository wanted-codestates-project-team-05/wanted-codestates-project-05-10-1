import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { searchWordApi } from '../services/searchWord';

export const store = configureStore({
  reducer: {
    [searchWordApi.reducerPath]: searchWordApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(searchWordApi.middleware),
});

setupListeners(store.dispatch);
