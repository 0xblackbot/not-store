// TODO: delete mock
const USER_MOCK = {
    id: 151872929,
    first_name: 'Andrii Ivaniv',
    last_name: '',
    username: 'unixvb',
    language_code: 'en',
    is_premium: true,
    allows_write_to_pm: true,
    photo_url:
        'https://t.me/i/userpic/320/5P-RxYMc8EFHYlIhQaTdLih_eMg6JlR6jFlzeW3PJc4.svg'
};

export const UNSAFE_INIT_DATA = {
    // non-null assertion used to silence the type error,
    // runtime guard still remains via using IS_TMA check
    user: window.Telegram.WebApp.initDataUnsafe.user! ?? USER_MOCK
};

export const IS_TMA: boolean = !!UNSAFE_INIT_DATA.user;
