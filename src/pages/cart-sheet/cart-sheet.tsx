import {EmptyCart} from './empty-cart';
import MinusIcon from '../../icons/minus.svg?react';
import XMarkIcon from '../../icons/x-mark.svg?react';
import {useDispatch} from '../../store';
import {removeFromCart} from '../../store/cart/actions';
import {
    useSelectCartItems,
    useSelectCartTotalPrice
} from '../../store/cart/selectors';
import {useBackButton, useNavigateBack} from '../../utils/navigation.utils';

export const CartSheet = () => {
    const dispatch = useDispatch();
    const navigateBack = useNavigateBack();

    const cartItems = useSelectCartItems();
    const cartTotalPrice = useSelectCartTotalPrice();

    useBackButton();

    const handleMinusClick = (id: number) => dispatch(removeFromCart(id));

    return (
        <div className="relative">
            <div
                className="absolute top-4 right-4 h-7 w-7 flex items-center justify-center rounded-[16px] bg-[var(--c-button-additional)]"
                onClick={navigateBack}
            >
                <XMarkIcon />
            </div>

            {cartItems.length === 0 ? (
                <EmptyCart onOkClick={navigateBack} />
            ) : (
                <>
                    <p className="h3-text pt-4 px-4">Cart</p>

                    <div className="flex flex-col gap-1 p-4">
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-3 py-1 items-center"
                            >
                                <img
                                    src={item.image}
                                    className="w-15 aspect-square object-cover rounded-[12px]"
                                />
                                <div className="flex flex-1 justify-between items-center">
                                    <div>
                                        <p className="price-text">
                                            {item.category}
                                        </p>
                                        <p className="h4-text">{item.name}</p>
                                    </div>
                                    <p className="body-text">
                                        {item.amount * item.price}{' '}
                                        {item.currency}
                                    </p>
                                </div>
                                <div
                                    className="flex w-7 h-7 items-center justify-center rounded-[8px] bg-[var(--c-button-additional)]"
                                    onClick={() => handleMinusClick(item.id)}
                                >
                                    <MinusIcon />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-nav-bar box-content pt-2 px-4">
                        <div className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]">
                            <p className="big-button-text text-[var(--c-bg-bw)]">
                                Buy for {cartTotalPrice} NOT
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
