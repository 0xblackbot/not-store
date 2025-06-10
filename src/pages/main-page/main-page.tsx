import {memo, useMemo, useState} from 'react';

import {CatalogueList} from './catalogue-list';
import {MainPageHeader} from './header';
import {useSelectCatalogue} from '../../store/catalogue/selectors';
import {searchCatalogue} from '../../utils/search.utils';

export const MainPage = memo(() => {
    const catalogue = useSelectCatalogue();
    const [searchValue, setSearchValue] = useState('');

    const filteredCatalogue = useMemo(
        () => searchCatalogue(catalogue, searchValue),
        [catalogue, searchValue]
    );

    return (
        <>
            <MainPageHeader
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <CatalogueList filteredCatalogue={filteredCatalogue} />
        </>
    );
});
