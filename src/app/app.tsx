import {BrowserRouter} from 'react-router-dom';

import {MainRouter} from '../navigation/main-router';

export const App = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};
