import {createContext} from 'react';

interface SuccessOverlayContextValues {
    show: () => void;
}

export const SuccessOverlayContext = createContext<SuccessOverlayContextValues>(
    {show: () => {}}
);
