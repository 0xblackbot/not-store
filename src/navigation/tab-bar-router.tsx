import {Suspense} from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';

import {AccountPage} from '../pages/account-page';
import {MainPage} from '../pages/main-page';

export const TabBarRouter = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
                <Suspense fallback={null}>
                    <Routes>
                        <Route index element={<MainPage />} />
                        <Route path="account" element={<AccountPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </div>
            <nav className="h-14 flex bg-white border-t border-gray-200">
                <NavLink
                    to="/"
                    end
                    className={({isActive}) =>
                        `flex-1 flex items-center justify-center text-sm ${
                            isActive ? 'text-black' : 'text-gray-400'
                        }`
                    }
                >
                    Main
                </NavLink>
                <NavLink
                    to="/account"
                    className={({isActive}) =>
                        `flex-1 flex items-center justify-center text-sm ${
                            isActive ? 'text-black' : 'text-gray-400'
                        }`
                    }
                >
                    Account
                </NavLink>
            </nav>
        </div>
    );
};
