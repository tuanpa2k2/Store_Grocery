import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);

    return <div>{children}</div>;
};

export default AppContext;
