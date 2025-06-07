import {useEffect} from 'react';

export const useThemeStyles = () => {
    useEffect(() => {
        const apply = () => {
            document.documentElement.classList.toggle(
                'dark',
                window.Telegram.WebApp.colorScheme === 'dark'
            );

            const computedStyle = getComputedStyle(document.documentElement);
            const bgColor = computedStyle.getPropertyValue('--c-bg-bw').trim();

            window.Telegram.WebApp.setHeaderColor(bgColor);
            window.Telegram.WebApp.setBackgroundColor(bgColor);
            window.Telegram.WebApp.setBottomBarColor(bgColor);
        };

        apply();
        window.Telegram.WebApp.onEvent('themeChanged', apply);
        return () => window.Telegram.WebApp.offEvent('themeChanged', apply);
    }, []);
};
