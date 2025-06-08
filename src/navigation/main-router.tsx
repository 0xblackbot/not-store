import {AnimatePresence} from 'motion/react';
import {Route, Routes, useLocation} from 'react-router-dom';

import {CartSheetMotion} from './cart-sheet-motion';
import {ItemPageMotion} from './item-page-motion';
import {TabBarRouter} from './tab-bar-router/tab-bar-router';

export const MainRouter = () => {
    const location = useLocation();
    const background = location.state as undefined | {background?: Location};

    return (
        <>
            <Routes location={background?.background || location}>
                <Route path="/*" element={<TabBarRouter />} />
            </Routes>

            <AnimatePresence initial={false}>
                {location.pathname.startsWith('/item') && (
                    <Routes location={location}>
                        <Route
                            path="item/:itemId"
                            element={<ItemPageMotion isModal={!!background} />}
                        />
                    </Routes>
                )}

                {location.pathname === '/cart' && (
                    <Routes location={location}>
                        <Route path="cart" element={<CartSheetMotion />} />
                    </Routes>
                )}
            </AnimatePresence>
        </>
    );
};
