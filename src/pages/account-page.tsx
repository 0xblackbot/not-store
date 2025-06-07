import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {UNSAFE_INIT_DATA} from '../globals';
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
            <img src={UNSAFE_INIT_DATA.user.photo_url} />
            <p>
                {[
                    UNSAFE_INIT_DATA.user.first_name,
                    UNSAFE_INIT_DATA.user.last_name
                ].join(' ')}
            </p>
            <p>History</p>
            {history.map(item => (
                <Link
                    key={item.timestamp}
                    to={`/item/${item.id}`}
                    state={{background: location}}
                >
                    {item.data.name}
                </Link>
            ))}
        </>
    );
};
