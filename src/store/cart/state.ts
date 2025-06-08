import {CartItem} from '../../interfaces/cart-item';

export interface CartState {
    items: Record<number, CartItem>;
}
