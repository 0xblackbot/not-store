import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {ActionButtons} from './action-buttons';
import {Tags} from './tags';
import {Thumbnails} from './thumbnails';
import ShareIcon from '../../icons/share.svg?react';
import {
    useSelectCatalogueItem,
    useSelectCatalogueLoading
} from '../../store/catalogue/selectors';
import {useBackButton, useNavigateBack} from '../../utils/navigation.utils';

export const ItemPage = () => {
    const params = useParams();
    const navigateBack = useNavigateBack();

    const isLoading = useSelectCatalogueLoading();
    const item = useSelectCatalogueItem(Number(params.itemId));

    useEffect(() => {
        if (!item && !isLoading) {
            navigateBack();
        }
    }, [item, isLoading]);

    useBackButton();

    if (!item) {
        return null;
    }

    return (
        <>
            <div className="flex justify-between items-center pt-4 pr-4 pb-3 pl-4">
                <p className="h1-text">{item.name}</p>
                <ShareIcon className="w-7 h-7" />
            </div>
            <p className="body-text p-4">{item.description}</p>

            <Tags item={item} />

            <Thumbnails images={item.images} />

            <ActionButtons item={item} />
        </>
    );
};
