import {useLocation, useNavigate} from 'react-router-dom';

export const useNavigateBack = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return () => {
        if (location.state) navigate(-1);
        else navigate('/');
    };
};
