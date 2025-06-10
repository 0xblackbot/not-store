import {CartItem} from '@interfaces/cart-item';

export interface CartState {
    record: Record<number, CartItem>;
}
