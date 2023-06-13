import React from 'react';
import NavbarLeft from '~/components/NavbarLeft/NavbarLeft';
import Card from '~/components/Card/Card';

import classNames from 'classnames/bind';
import styles from './TypeProductPage.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const TypeProductPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('column-left')}>
                    <NavbarLeft />
                </div>
                <div className={cx('column-right')}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className={cx('pagination')}>
                        <p onClick={() => navigate('#')}>&laquo;</p>
                        <p onClick={() => navigate('/')}>1</p>
                        <p onClick={() => navigate('#')}>2</p>
                        <p onClick={() => navigate('#')}>...</p>
                        <p onClick={() => navigate('#')}>4</p>
                        <p onClick={() => navigate('#')}>5</p>
                        <p onClick={() => navigate('#')}>6</p>
                        <p onClick={() => navigate('#')}>&raquo;</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TypeProductPage;
