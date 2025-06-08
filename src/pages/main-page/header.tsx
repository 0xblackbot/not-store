import {useNavigate} from 'react-router-dom';

import CartIcon from '../../icons/cart.svg?react';
import SearchIcon from '../../icons/search.svg?react';
import {useSelectCartTotalAmount} from '../../store/cart/selectors';

export const MainPageHeader = () => {
    const navigate = useNavigate();

    const cartTotalAmount = useSelectCartTotalAmount();

    const handleCartClick = () => navigate('/cart');

    return (
        <div className="flex w-full items-center justify-between pt-4 pr-4 pb-3 pl-4">
            <p className="h1-text truncate">Not Store</p>
            <div className="flex items-center gap-2">
                <SearchIcon />
                {cartTotalAmount > 0 ? (
                    <div
                        className="h-7 w-7 flex items-center justify-center"
                        onClick={handleCartClick}
                    >
                        <div className="h-[23px] w-[23px] ghost-button-text text-center rounded-full text-[var(--c-bg-bw)] bg-[var(--c-button-bw)]">
                            {cartTotalAmount}
                        </div>
                    </div>
                ) : (
                    <CartIcon onClick={handleCartClick} />
                )}
            </div>
        </div>
    );
};
