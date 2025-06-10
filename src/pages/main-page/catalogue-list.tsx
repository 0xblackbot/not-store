import {FC} from 'react';

import {CatalogueListItem} from './catalogue-list-item';
import {CatalogueListSkeleton} from './catalogue-list-skeleton';
import NotFoundIcon from '../../icons/not-found.svg?react';
import {CatalogueItem} from '../../interfaces/catalogue-item';
import {useSelectCatalogueLoading} from '../../store/catalogue/selectors';

interface Props {
    filteredCatalogue: CatalogueItem[];
}

export const CatalogueList: FC<Props> = ({filteredCatalogue}) => {
    const isLoading = useSelectCatalogueLoading();

    if (isLoading) {
        return <CatalogueListSkeleton />;
    }

    if (filteredCatalogue.length === 0) {
        return (
            <div className="flex flex-1 flex-col gap-2 mt-20 items-center">
                <NotFoundIcon className="no-current-fill" />
                <p className="h1-text">Not Found</p>
                <p className="body-text opacity-50">This style doesn’t exist</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-3 justify-items-center px-4">
            {filteredCatalogue.map(item => (
                <CatalogueListItem key={item.id} item={item} />
            ))}
        </div>
    );
};
