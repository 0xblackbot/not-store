export const IS_TMA: boolean = !!window.Telegram.WebApp.initData;

const userName = [
    window.Telegram.WebApp.initDataUnsafe.user?.first_name,
    window.Telegram.WebApp.initDataUnsafe.user?.last_name
].join(' ');

export const UNSAFE_INIT_DATA = {
    user: {
        photo_url:
            window.Telegram.WebApp.initDataUnsafe.user?.photo_url ??
            'http://0xblackbot.github.io/not-store/images/default_user.png',
        name: userName === ' ' ? 'Username' : userName
    }
};

export const BASE_URL = import.meta.env.VITE_BASE_URL ?? '/';
