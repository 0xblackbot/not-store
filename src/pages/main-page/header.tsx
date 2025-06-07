import CartIcon from '../../icons/cart.svg?react';
import SearchIcon from '../../icons/search.svg?react';

export const MainPageHeader = () => {
    return (
        <div className="flex w-full items-center justify-between pt-4 pr-4 pb-3 pl-4">
            <p className="h1-text">Not Store</p>
            <div className="flex items-center gap-2">
                <SearchIcon />
                <CartIcon />
            </div>
        </div>
    );
};
