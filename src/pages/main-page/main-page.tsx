import {Link, useLocation} from 'react-router-dom';

import {MainPageHeader} from './header';
import {ImagesCarousel} from './images-carousel';
import {useSelectCatalogue} from '../../store/catalogue/selectors';

export const MainPage = () => {
    const location = useLocation();
    const catalogue = useSelectCatalogue();

    return (
        <>
            <MainPageHeader />

            <div className="grid grid-cols-2 gap-3 justify-items-center px-4">
                {catalogue.map(item => (
                    <Link
                        key={item.id}
                        to={`/item/${item.id}`}
                        state={{background: location}}
                        className="flex flex-col gap-2 w-full"
                    >
                        <ImagesCarousel images={item.images} />

                        <div className="flex flex-col gap-0.5 px-2">
                            <p className="h4-text truncate">{item.name}</p>
                            <p className="caption-text truncate">
                                <span>{item.price}</span>{' '}
                                <span className="opacity-50">
                                    {item.currency}
                                </span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};
