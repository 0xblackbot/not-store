import {configureStore} from '@reduxjs/toolkit';
import {
    useDispatch as useRawDispatch,
    useSelector as useRawSelector
} from 'react-redux';
import {persistStore} from 'redux-persist';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist/es/constants';

import {persistedReducer} from './reducer';

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefault =>
        getDefault({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useDispatch = useRawDispatch.withTypes<AppDispatch>();
export const useSelector = useRawSelector.withTypes<RootState>();
