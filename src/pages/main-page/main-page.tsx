import {useMemo, useState} from 'react';

import {CatalogueListItem} from './catalogue-list-item';
import {MainPageHeader} from './header';
import NotFoundIcon from '../../icons/not-found.svg?react';
import {useSelectCatalogue} from '../../store/catalogue/selectors';
import {searchCatalogue} from '../../utils/search.utils';

export const MainPage = () => {
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

            {filteredCatalogue.length === 0 ? (
                <div className="flex flex-1 flex-col gap-2 mt-20 items-center">
                    <NotFoundIcon className="no-current-fill" />
                    <p className="h1-text">Not Found</p>
                    <p className="body-text opacity-50">
                        This style doesn’t exist
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3 justify-items-center px-4">
                    {filteredCatalogue.map(item => (
                        <CatalogueListItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </>
    );
};
