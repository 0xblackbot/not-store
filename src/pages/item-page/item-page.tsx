import {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';

import {Thumbnails} from './thumbnails';
import ShareIcon from '../../icons/share.svg?react';
import {
    useSelectCatalogueItem,
    useSelectCatalogueLoading
} from '../../store/catalogue/selectors';
import {useNavigateBack} from '../../utils/navigation.utils';

export const ItemPage = () => {
    const params = useParams();
    const navigateBack = useNavigateBack();

    const isLoading = useSelectCatalogueLoading();
    const item = useSelectCatalogueItem(Number(params.itemId));

    useEffect(() => {
        if (!item && !isLoading) {
            console.log('item not found');
            navigateBack();
        }
    }, [item, isLoading]);

    if (!item) {
        return null;
    }

    const tagsData = useMemo(() => {
        const fabricArray = item.tags.fabric.split(' ');

        return [
            {value: item.price, info: item.currency},
            {value: item.left, info: 'left'},
            {value: fabricArray[0], info: fabricArray[1]}
        ];
    }, [item]);

    return (
        <>
            <div className="flex justify-between items-center pt-4 pr-4 pb-3 pl-4">
                <p className="h1-text">{item.name}</p>
                <ShareIcon className="w-7 h-7" />
            </div>
            <p className="body-text p-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 pt-4 pr-4 pb-5 pl-4">
                {tagsData.map((item, index) => (
                    <div
                        key={index}
                        className="price-text flex gap-0.5 min-w-4.5 rounded-[10px] py-0.5 px-2 bg-[var(--c-button-additional)]"
                    >
                        <p>{item.value}</p>
                        <p className="opacity-50 uppercase">{item.info}</p>
                    </div>
                ))}
            </div>

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
