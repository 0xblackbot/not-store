import {CatalogueItem} from './catalogue-item';

export interface HistoryItem {
    timestamp: number;
    id: number;
    total: number;
    currency: string;
}

export interface HistoryDisplayItem extends HistoryItem {
    data: CatalogueItem;
}
