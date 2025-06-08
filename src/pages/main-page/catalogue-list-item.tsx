import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {ImagesCarousel} from './images-carousel';
import CheckMarkIcon from '../../icons/check-mark.svg?react';
import {CatalogueItem} from '../../interfaces/catalogue-item';
import {useSelectCartItemExist} from '../../store/cart/selectors';

interface Props {
    item: CatalogueItem;
}

export const CatalogueListItem: FC<Props> = ({item}) => {
    const location = useLocation();
    const cartItemExist = useSelectCartItemExist(item.id);

    return (
        <Link
            to={`/item/${item.id}`}
            state={{background: location}}
            className="relative flex flex-col gap-2 w-full"
        >
            {cartItemExist && (
                <div className="absolute z-1 w-5.5 h-5.5 top-2 right-2 flex items-center justify-center rounded-full bg-[var(--c-button-bw)]">
                    <CheckMarkIcon className="w-3.5 h-3.5 text-[var(--c-bg-bw)]" />
                </div>
            )}

            <ImagesCarousel images={item.images} />

            <div className="flex flex-col gap-0.5 px-2">
                <p className="h4-text truncate">{item.name}</p>
                <p className="caption-text truncate">
                    <span>{item.price}</span>{' '}
                    <span className="opacity-50">{item.currency}</span>
                </p>
            </div>
        </Link>
    );
};
