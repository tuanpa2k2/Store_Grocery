import React from 'react';

import classNames from 'classnames/bind';
import styles from './TypeProduct.module.scss';

const cx = classNames.bind(styles);

const TypeProduct = ({ name }) => {
    return <div className={cx('wrapper')}>{name}</div>;
};

export default TypeProduct;
