import {CatalogueItem, CatalogueRecord} from '../../interfaces/catalogue-item';

export interface CatalogueState {
    data: CatalogueItem[];
    record: CatalogueRecord;
    isLoading: boolean;
    error: string | null;
}
