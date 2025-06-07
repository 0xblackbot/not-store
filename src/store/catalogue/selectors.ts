import {CatalogueItem} from '../../interfaces/catalogue-item';
import {useSelector} from '../index';

export const useSelectCatalogueLoading = () =>
    useSelector(state => state.catalogue.isLoading);
export const useSelectCatalogue = () =>
    useSelector(state => state.catalogue.data);
export const useSelectCatalogueItem = (id: number): CatalogueItem | undefined =>
    useSelector(state => state.catalogue.record[id]);
