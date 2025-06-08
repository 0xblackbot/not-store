import {useCallback, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {ITEM_PAGE_PREFIX} from '../globals';

export const useNavigateBack = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return useCallback(() => {
        if (location.state) navigate(-1);
        else navigate('/');
    }, [location.state, navigate]);
};

export const useBackButton = () => {
    const navigateBack = useNavigateBack();

    useEffect(() => {
        window.Telegram.WebApp.BackButton.show();
        window.Telegram.WebApp.BackButton.onClick(navigateBack);

        return () => {
            window.Telegram.WebApp.BackButton.hide();
            window.Telegram.WebApp.BackButton.offClick(navigateBack);
        };
    }, [navigateBack]);
};

export const useStartParameters = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const startParam = window.Telegram?.WebApp?.initDataUnsafe?.start_param;

        if (startParam?.startsWith(ITEM_PAGE_PREFIX)) {
            const id = startParam.replace(ITEM_PAGE_PREFIX, '');
            navigate(`/item/${id}`);
        }
    }, []);
};
