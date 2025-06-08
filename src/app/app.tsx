import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {MainRouter} from '../navigation/main-router';
import {SuccessOverlayProvider} from '../pages/success-overlay/provider';
import {useDispatch} from '../store';
import {fetchCatalogue} from '../store/catalogue/thunk';
import {fetchHistory} from '../store/history/thunk';
import {useThemeStyles} from '../utils/theme.utils';
import {requestFullscreen} from '../utils/web-app.utils';

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
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </SuccessOverlayProvider>
    );
};
