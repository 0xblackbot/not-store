import {createSlice} from '@reduxjs/toolkit';

import {CatalogueState} from './state';
import {fetchCatalogue} from './thunk';
import {CatalogueRecord} from '../../interfaces/catalogue-item';

export const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: {
        data: [],
        record: {},
        isLoading: true,
        error: null
    } as CatalogueState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCatalogue.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCatalogue.fulfilled, (state, action) => {
                const newRecord: CatalogueRecord = {};

                for (const item of action.payload) {
                    newRecord[item.id] = item;
                }

                state.isLoading = false;
                state.data = action.payload;
                state.record = newRecord;
            })
            .addCase(fetchCatalogue.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    }
});
