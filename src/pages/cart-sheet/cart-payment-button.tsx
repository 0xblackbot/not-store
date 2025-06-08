import {FC} from 'react';

import {useMakePayment} from '../../utils/payment.utils';

interface Props {
    cartTotalPrice: number;
}

export const CartPaymentButton: FC<Props> = ({cartTotalPrice}) => {
    const makePayment = useMakePayment();

    const handleBuyClick = () => makePayment(cartTotalPrice, true);

    return (
        <div
            className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]"
            onClick={handleBuyClick}
        >
            <p className="big-button-text text-[var(--c-bg-bw)]">
                Buy for {cartTotalPrice} NOT
            </p>
        </div>
    );
};
