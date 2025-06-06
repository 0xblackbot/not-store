import {createSlice} from '@reduxjs/toolkit';

import {CatalogueState} from './state';
import {fetchCatalogue} from './thunk';

export const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: {data: [], isLoading: false, error: null} as CatalogueState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCatalogue.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCatalogue.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCatalogue.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    }
});
