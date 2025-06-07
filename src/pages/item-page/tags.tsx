import {FC, useMemo} from 'react';

import {CatalogueItem} from '../../interfaces/catalogue-item';

interface Props {
    item: CatalogueItem;
}

export const Tags: FC<Props> = ({item}) => {
    const tagsData = useMemo(() => {
        const fabricArray = item.tags.fabric.split(' ');

        return [
            {value: item.price, info: item.currency},
            {value: item.left, info: 'left'},
            {value: fabricArray[0], info: fabricArray[1]}
        ];
    }, [item]);

    return (
        <div className="flex flex-wrap gap-2 pt-4 pr-4 pb-5 pl-4">
            {tagsData.map((item, index) => (
                <div
                    key={index}
                    className="price-text flex gap-0.5 min-w-4.5 rounded-[10px] py-0.5 px-2 bg-[var(--c-button-additional)]"
                >
                    <p>{item.value}</p>
                    <p className="opacity-50 uppercase">{item.info}</p>
                </div>
            ))}
        </div>
    );
};
