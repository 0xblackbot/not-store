import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {useDispatch} from '../store';
import {useSelectHistory} from '../store/history/selectors';
import {fetchHistory} from '../store/history/thunk';

export const AccountPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const history = useSelectHistory();

    useEffect(() => {
        dispatch(fetchHistory());
    }, []);

    return (
        <>
            <p>Account page</p>
            <p>History</p>
            {history.map(item => (
                <Link
                    key={item.timestamp}
                    to={`/item/${item.id}`}
                    state={{background: location}}
                    className="block"
                >
                    {item.data.name}
                </Link>
            ))}
        </>
    );
};
