import {useSelector} from '../index';

export const useSelectCatalogueLoading = () =>
    useSelector(state => state.catalogue.isLoading);
export const useSelectCatalogue = () =>
    useSelector(state => state.catalogue.data);
