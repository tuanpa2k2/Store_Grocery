import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import prop from '~/assets/images/product.jpg';

import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

const Card = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className={cx('product-cart')}
        >
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
