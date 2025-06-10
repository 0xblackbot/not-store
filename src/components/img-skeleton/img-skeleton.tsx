import {FC, useCallback, useState} from 'react';

import {Skeleton} from '../skeleton/skeleton';

interface Props {
    src: string;
    alt: string;
    loading?: 'eager' | 'lazy';
    className?: string;
    onClick?: () => void;
}

export const ImgSkeleton: FC<Props> = ({
    src,
    alt,
    loading,
    className,
    onClick
}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = useCallback(() => setIsLoading(false), []);

    return (
        <Skeleton isLoading={isLoading} className={className} onClick={onClick}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                className={className}
                onLoad={handleLoad}
            />
        </Skeleton>
    );
};
