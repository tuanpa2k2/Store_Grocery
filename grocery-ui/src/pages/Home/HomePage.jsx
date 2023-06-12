import React from 'react';
import TypeProduct from '~/components/TypeProduct/TypeProduct';

import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import slider1 from '~/assets/images/slide1.jpg';
import slider2 from '~/assets/images/slide2.jpg';
import slider3 from '~/assets/images/slide3.jpg';
import SliderComponent from '~/components/Slider/SliderComponent';

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
            <SliderComponent arrImages={[slider1, slider2, slider3]} />
        </div>
    );
};

export default HomePage;
