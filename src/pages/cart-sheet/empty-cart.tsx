import {FC} from 'react';

interface Props {
    onOkClick: () => void;
}

export const EmptyCart: FC<Props> = ({onOkClick}) => {
    return (
        <>
            <div className="h-57 flex flex-col gap-2 items-center justify-center">
                <p className="h1-text">Cart’s cold</p>
                <p className="body-text">No items yet</p>
            </div>
            <div className="h-nav-bar box-content pt-2 px-4">
                <div
                    className="flex h-12.5 justify-center items-center rounded-[12px] bg-[var(--c-button-bw)]"
                    onClick={onOkClick}
                >
                    <p className="big-button-text text-[var(--c-bg-bw)]">OK</p>
                </div>
            </div>
        </>
    );
};
