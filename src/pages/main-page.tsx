import {Link, useLocation} from 'react-router-dom';

export const MainPage = () => {
    const location = useLocation();

    return (
        <div>
            <p>Main page</p>
            <Link to={`/cart`} state={{background: location}} className="block">
                Cart
            </Link>
            <Link
                to={`/item/1`}
                state={{background: location}}
                className="block"
            >
                Account 1
            </Link>
            <Link
                to={`/item/2`}
                state={{background: location}}
                className="block"
            >
                Account 2
            </Link>
        </div>
    );
};
