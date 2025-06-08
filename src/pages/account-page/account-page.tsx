import {useMemo} from 'react';
import {FixedSizeList} from 'react-window';

import {HistoryListItem, HistoryListItemProps} from './history-list-item';
import {UNSAFE_INIT_DATA} from '../../globals';
import {useSelectHistory} from '../../store/history/selectors';
import {useDivHeight} from '../../utils/div-height.utils';

const ITEM_SIZE = 68 + 8;

export const AccountPage = () => {
    const divHeight = useDivHeight();
    const history = useSelectHistory();

    const historyListProps = useMemo<HistoryListItemProps>(
        () => ({
            isLoading: false,
            dataArray: history
        }),
        [history]
    );

    const isEmpty = historyListProps.dataArray.length === 0;

    return (
        <div
            className={`flex flex-1 flex-col gap-8 pt-10 min-h-0 ${!isEmpty && 'touch-none'}`}
        >
            <div className="flex flex-col gap-2 items-center">
                <img
                    src={UNSAFE_INIT_DATA.user.photo_url}
                    alt={UNSAFE_INIT_DATA.user.name}
                    className="w-30 h-30 rounded-full object-cover"
                />
                <p className="h1-text">{UNSAFE_INIT_DATA.user.name}</p>
            </div>

            <div className="flex flex-1 flex-col overflow-hidden">
                {isEmpty ? (
                    <div className="flex flex-1 flex-col gap-2 pr-4 pb-5 pl-4 items-center justify-center">
                        <p className="h1-text">No history yet</p>
                        <p className="body-text opacity-50">
                            Let’s change that
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-2 p-4">
                            <p className="h3-text">History</p>
                        </div>

                        <div
                            ref={divHeight.ref}
                            className="flex flex-1 flex-col bg-red gap-2 min-h-0"
                        >
                            <FixedSizeList
                                itemSize={ITEM_SIZE}
                                itemData={historyListProps}
                                itemCount={historyListProps.dataArray.length}
                                width="100%"
                                height={divHeight.height}
                            >
                                {HistoryListItem}
                            </FixedSizeList>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
