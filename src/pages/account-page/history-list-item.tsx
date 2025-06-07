import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ListChildComponentProps} from 'react-window';

import {HistoryDisplayItem} from '../../interfaces/history-item';

export interface HistoryListItemProps {
    isLoading: boolean;
    dataArray: HistoryDisplayItem[];
}

export const HistoryListItem: FC<
    ListChildComponentProps<HistoryListItemProps>
> = ({index, style, data}) => {
    const location = useLocation();

    const item = data.dataArray[index];

    return (
        <Link
            key={item.timestamp}
            to={`/item/${item.id}`}
            state={{background: location}}
            style={style}
            className="flex gap-3 py-2 px-4"
        >
            <img
                src={item.data.images[0]}
                className="w-15 aspect-square object-cover rounded-[12px]"
            />
            <div className="flex flex-1 justify-between items-center truncate">
                <div className="truncate">
                    <p className="price-text truncate opacity-50 ">
                        {item.data.category}
                    </p>
                    <p className="h4 truncate">{item.data.name}</p>
                </div>
                <div className="text-right ">
                    <p className="price-text  opacity-50">
                        {item.timestampFormated}
                    </p>
                    <p className="h4">
                        {item.total} {item.currency}
                    </p>
                </div>
            </div>
        </Link>
    );
};
