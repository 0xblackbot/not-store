import {CatalogueListItem} from './catalogue-list-item';
import {CatalogueItem} from '../../interfaces/catalogue-item';

const catalogueItemMock: CatalogueItem = {
    id: 0,
    name: 'Not name',
    category: 'Not category',
    description: 'Not description',
    price: 88888888,
    currency: 'NOT',
    left: 0,
    tags: {
        fabric: '100% nothing'
    },
    images: ['https://0xblackbot.github.io/not-store/icons/icon-180.png']
};

const CATALOGUE_MOCK: CatalogueItem[] = new Array(10)
    .fill(0)
    .map((_, index) => ({...catalogueItemMock, id: index}));

export const CatalogueSkeleton = () => {
    return (
        <div className="grid grid-cols-2 gap-3 justify-items-center px-4">
            {CATALOGUE_MOCK.map(item => (
                <CatalogueListItem
                    key={`mock-${item.id}`}
                    item={item}
                    isLoading={true}
                />
            ))}
        </div>
    );
};
