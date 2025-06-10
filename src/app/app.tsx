import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {BASE_URL} from '@globals';
import {MainRouter} from '@navigation/main-router';
import {SuccessOverlayProvider} from '@pages/success-overlay/provider';
import {fetchCatalogue} from '@store/catalogue/thunk';
import {fetchHistory} from '@store/history/thunk';
import {useDispatch} from '@store/store';
import {useThemeStyles} from '@utils/theme.utils';
import {requestFullscreen} from '@utils/web-app.utils';

export const App = () => {
    const dispatch = useDispatch();

    useThemeStyles();

    useEffect(() => {
        window.Telegram.WebApp.ready();
        requestFullscreen();

        dispatch(fetchCatalogue());
        dispatch(fetchHistory());
    }, []);

    return (
        <SuccessOverlayProvider>
            <BrowserRouter basename={BASE_URL}>
                <MainRouter />
            </BrowserRouter>
        </SuccessOverlayProvider>
    );
};
