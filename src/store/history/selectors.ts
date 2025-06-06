import {useSelector} from '../index';

export const useSelectHistory = () => useSelector(state => state.history.data);
export const useSelectHistoryLoading = () =>
    useSelector(state => state.history.isLoading);
