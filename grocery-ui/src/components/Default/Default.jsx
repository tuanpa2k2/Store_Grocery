import React from 'react';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';

const Default = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Default;
