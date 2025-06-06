import {useSelector} from '../index';

export const useSelectCatalogue = () =>
    useSelector(state => state.catalogue.data);
export const useSelectCatalogueLoading = () =>
    useSelector(state => state.catalogue.isLoading);
