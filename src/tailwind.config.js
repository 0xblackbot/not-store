export default {
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                'inset-top':
                    'calc(var(--tg-safe-area-inset-top, 0px) + var(--tg-content-safe-area-inset-top, 0px))',
                'inset-right':
                    'calc(var(--tg-safe-area-inset-right, 0px) + var(--tg-content-safe-area-inset-right, 0px))',
                'inset-bottom':
                    'calc(var(--tg-safe-area-inset-bottom, 34px) + var(--tg-content-safe-area-inset-bottom, 0px))',
                'inset-left':
                    'calc(var(--tg-safe-area-inset-left, 0px) + var(--tg-content-safe-area-inset-left, 0px))',
                'nav-bar':
                    'calc(49px + calc(var(--tg-safe-area-inset-bottom, 34px) + var(--tg-content-safe-area-inset-bottom, 0px)))'
            }
        }
    }
};
