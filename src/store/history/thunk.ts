import {createAsyncThunk} from '@reduxjs/toolkit';

import {getHistory} from '@utils/api.utils';

export const fetchHistory = createAsyncThunk(
    'history/fetchHistory',
    getHistory
);
