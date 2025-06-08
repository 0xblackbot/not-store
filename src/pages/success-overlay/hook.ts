import {useContext} from 'react';

import {SuccessOverlayContext} from './context';

export const useSuccessOverlay = () => useContext(SuccessOverlayContext);
