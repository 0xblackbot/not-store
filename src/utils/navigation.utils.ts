import {useCallback, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

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
