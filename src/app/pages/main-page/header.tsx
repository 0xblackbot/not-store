import {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useRef,
    useState
} from 'react';
import {useNavigate} from 'react-router-dom';

import CartIcon from '@icons/cart.svg?react';
import DeleteIcon from '@icons/delete.svg?react';
import SearchIcon from '@icons/search.svg?react';
import {useSelectCartTotalAmount} from '@store/cart/selectors';

interface Props {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export const MainPageHeader: FC<Props> = ({searchValue, setSearchValue}) => {
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const cartTotalAmount = useSelectCartTotalAmount();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isSearchOpen && inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [isSearchOpen]);

    const handleCartClick = () => navigate('/cart');
    const handleSearchClick = () => setIsSearchOpen(true);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchValue(event.target.value);
    const handleInputClear = () => {
        setSearchValue('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const handleCancelClick = () => {
        setSearchValue('');
        setIsSearchOpen(false);
    };

    return (
        <div className="flex w-full items-center justify-between h-15 pt-3 pr-4 pb-3 pl-4">
            {isSearchOpen ? (
                <div className="flex flex-1 gap-3 items-center">
                    <div className="relative flex flex-1">
                        <input
                            ref={inputRef}
                            className="flex flex-1 h-9 pl-9 rounded-[10px] bg-[var(--c-button-additional)] outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none shadow-none"
                            placeholder="Search"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        <SearchIcon className="absolute left-2 top-2 w-5.5 h-5.5 opacity-20" />
                        {searchValue && (
                            <DeleteIcon
                                className="absolute right-2 top-2.5 w-4 h-4 opacity-30"
                                onClick={handleInputClear}
                            />
                        )}
                    </div>

                    <p
                        className="ghost-button-text py-0.5"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </p>
                </div>
            ) : (
                <>
                    <p className="h1-text truncate">Not Store</p>
                    <div className="flex items-center gap-2">
                        <SearchIcon onClick={handleSearchClick} />
                        {cartTotalAmount > 0 ? (
                            <div
                                className="h-7 w-7 flex items-center justify-center"
                                onClick={handleCartClick}
                            >
                                <div className="h-[23px] w-[23px] ghost-button-text text-center rounded-full text-[var(--c-bg-bw)] bg-[var(--c-button-bw)]">
                                    {cartTotalAmount}
                                </div>
                            </div>
                        ) : (
                            <CartIcon onClick={handleCartClick} />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
