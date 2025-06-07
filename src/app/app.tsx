import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {MainRouter} from '../navigation/main-router';
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
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
