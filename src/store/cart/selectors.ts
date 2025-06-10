import {CartItem} from '@interfaces/cart-item';

import {createSelector, useSelector} from '../store';

export const useSelectCartItems = () =>
    useSelector(
        createSelector([state => state.cart.record], record =>
            Object.values(record)
        )
    );
export const useSelectCartItem = (id: number) =>
    useSelector((state): CartItem | undefined => state.cart.record[id]);
export const useSelectCartItemExist = (id: number) =>
    useSelector(state => !!state.cart.record[id]);

export const useSelectCartTotalAmount = () =>
    useSelector(state => {
        let result = 0;

        for (const item of Object.values(state.cart.record)) {
            result += item.amount;
        }

        return result;
    });

export const useSelectCartTotalPrice = () =>
    useSelector(state => {
        let result = 0;

        for (const item of Object.values(state.cart.record)) {
            result += item.amount * item.price;
        }

        return result;
    });
