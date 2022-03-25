import { configureStore } from '@reduxjs/toolkit';
// import slices 
import searchSlice from './components/Search/searchSlice';

export const store = configureStore({
  
  reducer: {

    search: searchSlice,

  },
});