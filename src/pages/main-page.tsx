import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {useDispatch} from '../store';
import {useSelectCatalogue} from '../store/catalogue/selectors';
import {fetchCatalogue} from '../store/catalogue/thunk';

export const MainPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const catalogue = useSelectCatalogue();

    useEffect(() => {
        dispatch(fetchCatalogue());
    }, []);

    return (
        <>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <p>Main page</p>
            <Link to={`/cart`} state={{background: location}}>
                Cart
            </Link>

            {catalogue.map(item => (
                <Link
                    key={item.id}
                    to={`/item/${item.id}`}
                    state={{background: location}}
                >
                    {item.name}
                </Link>
            ))}
        </>
    );
};
