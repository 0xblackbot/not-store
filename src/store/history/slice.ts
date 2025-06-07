import {createSlice} from '@reduxjs/toolkit';

import {HistoryState} from './state';
import {fetchHistory} from './thunk';

export const historySlice = createSlice({
    name: 'history',
    initialState: {data: [], isLoading: true, error: null} as HistoryState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchHistory.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchHistory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchHistory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    }
});
