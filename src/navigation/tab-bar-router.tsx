import {Routes, Route, Navigate, NavLink} from 'react-router-dom';

import {UNSAFE_INIT_DATA} from '../globals';
import NotIcon from '../icons/not.svg?react';
import {AccountPage} from '../pages/account-page/account-page';
import {MainPage} from '../pages/main-page/main-page';

export const TabBarRouter = () => {
    return (
        <div className="flex flex-col min-h-screen pt-inset-top">
            <div className="flex flex-1 flex-col overflow-y-auto pb-nav-bar">
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="account" element={<AccountPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <div className="h-nav-bar fixed inset-x-0 bottom-0 z-10 bg-bw">
                <nav className="grid grid-cols-2 pl-5 pr-5">
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
                            {[
                                UNSAFE_INIT_DATA.user.first_name,
                                UNSAFE_INIT_DATA.user.last_name
                            ].join(' ')}
                        </p>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};
