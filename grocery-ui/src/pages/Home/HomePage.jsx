import React from 'react';
import TypeProduct from '~/components/TypeProduct/TypeProduct';
import SliderComponent from '~/components/Slider/SliderComponent';
import Card from '~/components/Card/Card';
import slider1 from '~/assets/images/slide1.jpg';
import slider2 from '~/assets/images/slide2.jpg';
import slider3 from '~/assets/images/slide3.jpg';

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
            <SliderComponent arrImages={[slider1, slider2, slider3]} />
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
