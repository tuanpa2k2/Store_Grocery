import React from 'react';
import prop from '~/assets/images/product.jpg';

import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

const Card = () => {
    return (
        <div className={cx('product-cart')}>
            <div className={cx('thumbnail')}>
                <img src={prop} alt="" />
            </div>
            <div className={cx('prop-detail')}>
                <div className={cx('name')}>product name name a bee cen env bhe heemjz jeoeor jhn abcbfh abcd</div>
                <div className={cx('price')}>Price: 4000$</div>
            </div>
        </div>
    );
};

export default Card;
