import {createAsyncThunk} from '@reduxjs/toolkit';

import {getCatalogueItems} from '@utils/api.utils';

export const fetchCatalogue = createAsyncThunk(
    'catalogue/fetchCatalogue',
    getCatalogueItems
);
