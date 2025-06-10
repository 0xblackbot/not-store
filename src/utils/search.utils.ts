import {CatalogueItem} from '@interfaces/catalogue-item';

export const searchCatalogue = (
    catalogue: CatalogueItem[],
    searchValue: string
): CatalogueItem[] => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return catalogue;

    return catalogue.filter(item => {
        return (
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags.fabric.toLowerCase().includes(query)
        );
    });
};
