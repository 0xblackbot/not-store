import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

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

            <div className="grid grid-cols-2 gap-3 h-nav-bar box-content pt-2 px-4">
                <div className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-additional)]">
                    <p className="big-button-text">Add to cart</p>
                </div>
                <div className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]">
                    <p className="big-button-text text-[var(--c-bg-bw)]">
                        Buy now
                    </p>
                </div>
            </div>
        </>
    );
};
