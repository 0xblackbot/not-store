import {Link, useNavigate} from 'react-router-dom';

import CartIcon from '../../icons/cart.svg?react';
import SearchIcon from '../../icons/search.svg?react';

export const MainPageHeader = () => {
    const navigate = useNavigate();

    const handleCartClick = () => navigate('/cart');

    return (
        <div className="flex w-full items-center justify-between pt-4 pr-4 pb-3 pl-4">
            <p className="h1-text truncate">Not Store</p>
            <div className="flex items-center gap-2">
                <SearchIcon />
                <CartIcon onClick={handleCartClick} />
                <Link to={`/cart`} state={{background: location}}>
                    Cart
                </Link>
            </div>
        </div>
    );
};
