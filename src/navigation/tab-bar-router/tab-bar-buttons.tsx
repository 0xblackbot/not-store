import {NavLink} from 'react-router-dom';

import {TabPaymentButton} from './tab-payment-button';
import {UNSAFE_INIT_DATA} from '../../globals';
import NotIcon from '../../icons/not.svg?react';
import {useSelectCartTotalPrice} from '../../store/cart/selectors';

export const TabBarButtons = () => {
    const cartTotalPrice = useSelectCartTotalPrice();

    return (
        <div className="h-nav-bar fixed px-4 inset-x-0 bottom-0 z-10 bg-bw">
            {cartTotalPrice > 0 ? (
                <TabPaymentButton cartTotalPrice={cartTotalPrice} />
            ) : (
                <nav className="grid grid-cols-2">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `flex flex-col items-center gap-0.5 pt-0.5 pb-[1px] ${!isActive && 'opacity-20'}`
                        }
                    >
                        <NotIcon className="h-6 w-6 mt-[5px] mr-2 mb-[3px] ml-2 rounded-full object-cover" />
                        <p className="tab-button-text">Store</p>
                    </NavLink>
                    <NavLink
                        to="/account"
                        className={({isActive}) =>
                            `flex flex-col items-center gap-0.5 pt-0.5 pb-[1px] ${!isActive && 'opacity-20'}`
                        }
                    >
                        <img
                            src={UNSAFE_INIT_DATA.user.photo_url}
                            className="h-6 w-6 mt-[5px] mr-2 mb-[3px] ml-2 rounded-full object-cover"
                        />
                        <p className="tab-button-text truncate">
                            {UNSAFE_INIT_DATA.user.name}
                        </p>
                    </NavLink>
                </nav>
            )}
        </div>
    );
};
