import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CartState} from './state';
import {CatalogueItem} from '../../interfaces/catalogue-item';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {}
    } as CartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CatalogueItem>) => {
            const catalogueItem = action.payload;
            const existing = state.items[catalogueItem.id];

            if (existing) {
                existing.amount += 1;
            } else {
                state.items[catalogueItem.id] = {
                    amount: 1,
                    id: catalogueItem.id,
                    image: catalogueItem.images[0],
                    name: catalogueItem.name,
                    category: catalogueItem.category,
                    price: catalogueItem.price,
                    currency: catalogueItem.currency
                };
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existing = state.items[id];

            if (!existing) return;

            if (existing.amount > 1) {
                existing.amount -= 1;
            } else {
                delete state.items[id];
            }
        }
    }
});
