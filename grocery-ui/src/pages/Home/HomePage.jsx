import React from 'react';
import TypeProduct from '~/components/TypeProduct/TypeProduct';

import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
    const arr = ['Tivi', 'Tu Lanh', 'Laptop', 'Dieu Hoa'];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('type-product')}>
                {arr.map((item) => {
                    return <TypeProduct key={item} name={item} />;
                })}
            </div>
            Home Page
        </div>
    );
};

export default HomePage;
