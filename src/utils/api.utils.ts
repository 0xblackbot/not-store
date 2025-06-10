import axios from 'axios';

import {CatalogueItem} from '@interfaces/catalogue-item';
import {HistoryItem} from '@interfaces/history-item';

const api = axios.create({
    baseURL: 'https://not-contest-cdn.openbuilders.xyz/api/'
});

interface ApiResponse<T> {
    ok: boolean;
    data: T;
}

export const getCatalogueItems = () =>
    api
        .get<ApiResponse<CatalogueItem[]>>('items.json')
        .then(response => response.data.data);

export const getHistory = () =>
    api
        .get<ApiResponse<HistoryItem[]>>('history.json')
        .then(response => response.data.data);
