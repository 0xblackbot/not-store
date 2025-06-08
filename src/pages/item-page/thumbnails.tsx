import useEmblaCarousel from 'embla-carousel-react';
import {FC, useCallback, useEffect, useState} from 'react';

interface Props {
    images: string[];
}

export const Thumbnails: FC<Props> = ({images}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <>
            <div
                ref={emblaMainRef}
                className="flex flex-1 overflow-hidden px-4"
                onPointerDownCapture={event => event.stopPropagation()}
            >
                <div className="flex flex-1 gap-4 touch-pan-y touch-pinch-zoom">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="Product"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            className="w-full h-full object-cover rounded-[20px] transform-gpu flex-[0_0_100%] min-w-0"
                        />
                    ))}
                </div>
            </div>

            <div
                ref={emblaThumbsRef}
                className="flex py-2 px-4 overflow-hidden"
                onPointerDownCapture={event => event.stopPropagation()}
            >
                <div className="flex gap-2 w-full">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="Product"
                            loading="lazy"
                            className={`h-25 w-25 shrink-0 rounded-[16px] object-cover ${
                                index === selectedIndex &&
                                'border border-[var(--c-button-bw)]'
                            }`}
                            onClick={() => onThumbClick(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
