import {HistoryItem} from '../../interfaces/history-item';

export interface HistoryState {
    data: HistoryItem[];
    isLoading: boolean;
    error: string | null;
}
