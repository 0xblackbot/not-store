import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import {catalogueSlice} from './catalogue/slice';
import {historySlice} from './history/slice';

export const persistedReducer = combineReducers({
    catalogue: persistReducer(
        {
            key: 'catalogue',
            storage,
            blacklist: ['isLoading']
        },
        catalogueSlice.reducer
    ),
    history: persistReducer(
        {
            key: 'history',
            storage,
            blacklist: ['isLoading']
        },
        historySlice.reducer
    )
});
