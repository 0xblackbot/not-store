import {useTonConnectUI, useTonWallet} from '@tonconnect/ui-react';
import {useCallback} from 'react';

import {PAYMENT_RECEIVER_ADDRESS} from '@globals';
import {useSuccessOverlay} from '@pages/success-overlay/hook';
import {clearCart} from '@store/cart/actions';
import {useDispatch} from '@store/store';

export const useMakePayment = () => {
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();

    const dispatch = useDispatch();
    const successOverlay = useSuccessOverlay();

    return useCallback(
        async (notAmount: number, shouldClearCard: boolean) => {
            console.log(`${notAmount} NOT payment request`);

            try {
                // 1. Disconnect previous connection
                if (tonConnectUI.connected) {
                    await tonConnectUI.disconnect();
                }

                // 2. Request wallet connection
                await new Promise<void>((resolve, reject) => {
                    const unsubscribe = tonConnectUI.onStatusChange(
                        wallet => {
                            if (wallet) {
                                unsubscribe();
                                resolve();
                            }
                        },
                        err => {
                            unsubscribe();
                            reject(err);
                        }
                    );

                    tonConnectUI.openModal().catch(reject);
                });

                // 3. Build & send the transaction
                /**
                 * TODO: Replace TON transfer with NOT jetton transfer.
                 * Currently sending a small amount of TON for testing purposes only.
                 */
                const nanoAmount = notAmount * 10 ** 2;

                const response = await tonConnectUI.sendTransaction({
                    validUntil: Math.floor(Date.now() / 1000) + 60,
                    messages: [
                        {
                            address: PAYMENT_RECEIVER_ADDRESS,
                            amount: nanoAmount.toString()
                        }
                    ]
                });

                // 4. Handle successfully sent transaction
                if (response.boc) {
                    window.Telegram.WebApp.HapticFeedback.notificationOccurred(
                        'success'
                    );
                    successOverlay.show();

                    if (shouldClearCard) {
                        dispatch(clearCart());
                    }
                }
            } catch (error) {
                console.log('Failed to make payment:', error);
            }
        },
        [wallet, tonConnectUI, successOverlay]
    );
};
