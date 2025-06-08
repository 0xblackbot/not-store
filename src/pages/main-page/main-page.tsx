import {CatalogueListItem} from './catalogue-list-item';
import {MainPageHeader} from './header';
import {useSelectCatalogue} from '../../store/catalogue/selectors';

export const MainPage = () => {
    const catalogue = useSelectCatalogue();

    return (
        <>
            <MainPageHeader />

            <div className="grid grid-cols-2 gap-3 justify-items-center px-4">
                {catalogue.map(item => (
                    <CatalogueListItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};
