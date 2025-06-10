export const IS_TMA: boolean = !!window.Telegram.WebApp.initData;

const userName = [
    window.Telegram.WebApp.initDataUnsafe.user?.first_name,
    window.Telegram.WebApp.initDataUnsafe.user?.last_name
].join(' ');

export const UNSAFE_INIT_DATA = {
    user: {
        photo_url:
            window.Telegram.WebApp.initDataUnsafe.user?.photo_url ??
            'https://0xblackbot.github.io/not-store/images/default_user.png',
        name: userName === ' ' ? 'Username' : userName
    }
};

export const BASE_URL = import.meta.env.VITE_BASE_URL ?? '/';

export const TMA_APP_URL = 'https://t.me/otStoreBot/app';
export const ITEM_PAGE_PREFIX = 'itemId_';

export const PAYMENT_RECEIVER_ADDRESS =
    'UQCIOI01FJKvUHqUNF-c1BGytouH5HdeOPHCgyk2ddK1Y8oZ';
