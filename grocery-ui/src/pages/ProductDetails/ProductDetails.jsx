import React from 'react';
import ProductDetail from '~/components/ProductDetail/ProductDetail';

import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumbs-one')}>
                <ul>
                    <li>
                        <p onClick={() => navigate('/')}>Home</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/')}>type product</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/')}>product detail</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/')}>name product</p>
                    </li>
                </ul>
            </div>
            <ProductDetail />
        </div>
    );
};

export default ProductDetails;
