import {CatalogueItem} from '@interfaces/catalogue-item';
import {HistoryItem} from '@interfaces/history-item';

const BASE_URL = 'https://not-contest-cdn.openbuilders.xyz/api/';

interface ApiResponse<T> {
    ok: boolean;
    data: T;
}

async function fetchJson<T>(path: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const payload = (await response.json()) as ApiResponse<T>;
    if (!payload.ok) {
        throw new Error('API returned ok=false');
    }

    return payload.data;
}

export const getCatalogueItems = () => fetchJson<CatalogueItem[]>('items.json');

export const getHistory = () => fetchJson<HistoryItem[]>('history.json');
