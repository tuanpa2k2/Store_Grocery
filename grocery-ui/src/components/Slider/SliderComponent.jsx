import React from 'react';
import Slider from 'react-slick';

import classNames from 'classnames/bind';
import styles from './SliderComponent.module.scss';

const cx = classNames.bind(styles);

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className={cx('wrapper-slider')}>
            <Slider className={cx('slider')} {...settings}>
                {arrImages.map((img) => {
                    return <img key={img} src={img} alt="slider" />;
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;
