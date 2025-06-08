import {useTonConnectUI} from '@tonconnect/ui-react';
import {useCallback} from 'react';

import {useSuccessOverlay} from '../pages/success-overlay/hook';
import {useDispatch} from '../store';
import {clearCart} from '../store/cart/actions';

export const useMakePayment = () => {
    const dispatch = useDispatch();
    const [tonConnectUi] = useTonConnectUI();
    const successOverlay = useSuccessOverlay();

    return useCallback(
        async (notAmount: number, shouldClearCard: boolean) => {
            console.log(`${notAmount} NOT payment request`);

            try {
                await tonConnectUi.disconnect();
            } catch {
                /* empty */
            }

            await tonConnectUi.openModal().then(() => {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred(
                    'success'
                );
                successOverlay.show();

                if (shouldClearCard) {
                    dispatch(clearCart());
                }
            });
        },
        [tonConnectUi, successOverlay.show]
    );
};
