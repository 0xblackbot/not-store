import {HistoryDisplayItem} from '../../interfaces/history-item';
import {createSelector, useSelector} from '../index';

export const useSelectHistoryLoading = () =>
    useSelector(state => state.history.isLoading);

const historySelector = createSelector(
    [state => state.history.data, state => state.catalogue.record],
    (history, catalogueRecord): HistoryDisplayItem[] => {
        const result: HistoryDisplayItem[] = [];

        for (const historyItem of history) {
            const data = catalogueRecord[historyItem.id];

            if (data) {
                result.push({...historyItem, data});
            }
        }

        return result;
    }
);
export const useSelectHistory = () => useSelector(historySelector);
