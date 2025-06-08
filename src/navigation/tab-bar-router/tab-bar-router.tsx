import {Route, Routes} from 'react-router-dom';

import {TabBarButtons} from './tab-bar-buttons';
import {AccountPage} from '../../pages/account-page/account-page';
import {MainPage} from '../../pages/main-page/main-page';

export const TabBarRouter = () => {
    return (
        <div className="flex flex-col min-h-screen pt-inset-top">
            <div className="flex flex-1 flex-col overflow-y-auto pb-nav-bar">
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="account" element={<AccountPage />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </div>
            <TabBarButtons />
        </div>
    );
};
