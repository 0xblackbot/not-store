import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {MainRouter} from '../navigation/main-router';
import {useThemeStyles} from '../utils/theme.utils';
import {requestFullscreen} from '../utils/web-app.utils';

export const App = () => {
    useThemeStyles();

    useEffect(() => {
        window.Telegram.WebApp.ready();
        requestFullscreen();
    }, []);

    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
