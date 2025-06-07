import XMarkIcon from '../icons/x-mark.svg?react';
import {useNavigateBack} from '../utils/navigation.utils';

export const CartSheet = () => {
    const navigateBack = useNavigateBack();

    return (
        <div className="relative">
            <div
                className="absolute top-4 right-4 h-7 w-7 flex items-center justify-center rounded-[16px] bg-[var(--c-button-additional)]"
                onClick={navigateBack}
            >
                <XMarkIcon />
            </div>
            <div className="h-57 flex flex-col gap-2 items-center justify-center">
                <p className="h1-text">Cart’s cold</p>
                <p className="body-text">No items yet</p>
            </div>
            <div className="h-nav-bar box-content pt-2 px-4">
                <div
                    className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]"
                    onClick={navigateBack}
                >
                    <p className="big-button-text text-[var(--c-bg-bw)]">OK</p>
                </div>
            </div>
        </div>
    );
};
