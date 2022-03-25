import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({

    name: 'search',

    initialState: '',

    reducers: {
        // change category
        setCategory: (state, action) => {
            const category = action.payload;
            state = category;
        }
    }
});

// selector
export const selectSearch = (state) => state.search;

// actions
export const { setCategory } = searchSlice.actions;

// reducer
export default searchSlice.reducer;