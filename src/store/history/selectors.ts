import {HistoryDisplayItem} from '../../interfaces/history-item';
import {formatDate} from '../../utils/format.utils';
import {createSelector, useSelector} from '../index';

export const useSelectHistoryLoading = () =>
    useSelector(state => state.history.isLoading);

export const useSelectHistory = () =>
    useSelector(
        createSelector(
            [state => state.history.data, state => state.catalogue.record],
            (history, catalogueRecord): HistoryDisplayItem[] => {
                const result: HistoryDisplayItem[] = [];

                for (const historyItem of history) {
                    const data = catalogueRecord[historyItem.id];

                    if (data) {
                        const timestampFormated = formatDate(
                            historyItem.timestamp
                        );

                        result.push({...historyItem, timestampFormated, data});
                    }
                }

                return result;
            }
        )
    );
