import React from 'react';
import TypeProduct from '~/components/TypeProduct/TypeProduct';
import SliderComponent from '~/components/Slider/SliderComponent';
import Card from '~/components/Card/Card';
import bannerSlide1 from '~/assets/images/bannerSlide1.jpg';
import bannerSlide2 from '~/assets/images/bannerSlide2.jpg';
import bannerSlide3 from '~/assets/images/bannerSlide3.jpg';

import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
    const arrTypeProduct = ['Tivi', 'Tu Lanh', 'Laptop', 'Dieu Hoa'];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('type-product')}>
                {arrTypeProduct.map((item) => {
                    return <TypeProduct key={item} name={item} />;
                })}
            </div>
            <SliderComponent arrImages={[bannerSlide1, bannerSlide2, bannerSlide3]} />
            <div className={cx('heading-text')}>all products</div>
            <div className={cx('card-product')}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={cx('btn')}>
                <button className={cx('btn-xemthem')}>Xem Thêm</button>
            </div>
        </div>
    );
};

export default HomePage;
