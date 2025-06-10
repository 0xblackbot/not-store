import {FC, PropsWithChildren} from 'react';

import styles from './skeleton.module.css';

interface Props extends PropsWithChildren {
    isLoading: boolean;
    className?: string;
    onClick?: () => void;
}

export const Skeleton: FC<Props> = ({
    isLoading,
    className,
    onClick,
    children
}) => (
    <div
        className={`${className} ${isLoading && styles.skeleton_loading}`}
        onClick={onClick}
    >
        {children}
    </div>
);
