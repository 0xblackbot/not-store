import {useTonConnectUI} from '@tonconnect/ui-react';
import {useCallback} from 'react';

import {useSuccessOverlay} from '../pages/success-overlay/hook';

export const useMakePayment = () => {
    const [tonConnectUi] = useTonConnectUI();
    const successOverlay = useSuccessOverlay();

    return useCallback(
        async (notAmount: number) => {
            console.log(`${notAmount} NOT payment request`);

            try {
                await tonConnectUi.disconnect();
            } catch {
                /* empty */
            }

            await tonConnectUi.openModal().then(() => {
                successOverlay.show();
            });
        },
        [tonConnectUi, successOverlay.show]
    );
};
