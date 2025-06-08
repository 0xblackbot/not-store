import {FC} from 'react';

import {CatalogueItem} from '../../interfaces/catalogue-item';
import {useDispatch} from '../../store';
import {addToCart, removeFromCart} from '../../store/cart/actions';
import {useSelectCartItem} from '../../store/cart/selectors';
import {useMakePayment} from '../../utils/payment.utils';

interface Props {
    item: CatalogueItem;
}

export const ActionButtons: FC<Props> = ({item}) => {
    const dispatch = useDispatch();
    const makePayment = useMakePayment();

    const cartItem = useSelectCartItem(item.id);

    const handleAddToCart = () => dispatch(addToCart(item));
    const handleRemoveFromCart = () => dispatch(removeFromCart(item.id));
    const handleBuyClick = () => makePayment(item.price, false);

    return (
        <div className="grid grid-cols-2 gap-3 h-nav-bar box-content pt-2 px-4">
            {cartItem ? (
                <div className="flex h-12.5 gap-3 justify-center items-center rounded-[12px] bg-[var(--c-button-additional)]">
                    <p className="h4-text" onClick={handleRemoveFromCart}>
                        ➖
                    </p>
                    <p className="h3-text">{cartItem.amount}</p>
                    <p className="h4-text" onClick={handleAddToCart}>
                        ➕
                    </p>
                </div>
            ) : (
                <div
                    className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-additional)]"
                    onClick={handleAddToCart}
                >
                    <p className="big-button-text">Add to cart</p>
                </div>
            )}

            <div
                className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]"
                onClick={handleBuyClick}
            >
                <p className="big-button-text text-[var(--c-bg-bw)]">Buy now</p>
            </div>
        </div>
    );
};
