import {TonConnectUIProvider} from '@tonconnect/ui-react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {App} from './app/app';
import {persistor, store} from './store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <TonConnectUIProvider manifestUrl="https://0xblackbot.github.io/not-store/tonconnect-manifest.json">
                <App />
            </TonConnectUIProvider>
        </PersistGate>
    </Provider>
);
