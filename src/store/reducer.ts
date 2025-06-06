import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import {catalogueSlice} from './catalogue/slice';
import {historySlice} from './history/slice';

const rootReducer = combineReducers({
    catalogue: catalogueSlice.reducer,
    history: historySlice.reducer
});

export const persistedReducer = persistReducer(
    {
        key: 'not-store-root',
        storage
    },
    rootReducer
);
