import React from 'react';

import classNames from 'classnames/bind';
import styles from './TypeProduct.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const TypeProduct = ({ name }) => {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <ul>
                <li>
                    <p onClick={() => navigate('/')}>{name}</p>
                </li>
            </ul>
        </div>
    );
};

export default TypeProduct;
