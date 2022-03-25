import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({

    name: 'search',

    initialState: {
        category: 'films',
        searchTerm: ''
    },

    reducers: {
        // change category
        setStoreCategory: (state, action) => {
            const category = action.payload;
            state.category = category;
        },

        setStoreSearchTerm: (state, action) => {
            const   searchTerm   = action.payload;
            state.searchTerm = searchTerm;
        }
    }
});

// selector
export const selectStoreSearch = (state) => state.search.searchTerm;
export const selectStoreCategory = (state) => state.search.category

// actions
export const { setStoreCategory, setStoreSearchTerm } = searchSlice.actions;

// reducer
export default searchSlice.reducer;