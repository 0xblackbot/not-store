export interface CatalogueItem {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    currency: string;
    left: number;
    tags: {
        fabric: string;
    };
    images: string[];
}

// used for fast get via id
export type CatalogueRecord = Record<number, CatalogueItem>;
