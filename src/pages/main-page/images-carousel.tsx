import {EmblaCarouselType} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {FC, useCallback, useEffect, useState} from 'react';

interface Props {
    images: string[];
}

export const ImagesCarousel: FC<Props> = ({images}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative overflow-hidden rounded-[16px]">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="Product"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            className="w-full aspect-square object-cover"
                        />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, index) => {
                    const distance = Math.abs(index - selectedIndex);
                    const clamped = Math.min(distance, 3);

                    const width = [20, 4, 3, 2][clamped];
                    const opacity = [1, 0.05, 0.05, 0.05][clamped];

                    return (
                        <div
                            key={index}
                            className="h-1 rounded-full bg-white transition-all duration-300"
                            style={{
                                width,
                                opacity
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
