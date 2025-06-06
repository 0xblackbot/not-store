import {CatalogueItem} from '../../interfaces/catalogue-item';

export interface CatalogueState {
    data: CatalogueItem[];
    isLoading: boolean;
    error: string | null;
}
