import {memo, useMemo, useState} from 'react';

import {useSelectCatalogue} from '@store/catalogue/selectors';
import {searchCatalogue} from '@utils/search.utils';

import {CatalogueList} from './catalogue-list';
import {MainPageHeader} from './header';

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
