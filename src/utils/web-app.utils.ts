const FULLSCREEN_PLATFORMS = ['ios', 'android'];

export const requestFullscreen = () => {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes();

    try {
        if (FULLSCREEN_PLATFORMS.includes(window.Telegram.WebApp.platform)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.Telegram.WebApp?.requestFullscreen();
        }
    } catch (e) {
        console.log(e);
    }
};
