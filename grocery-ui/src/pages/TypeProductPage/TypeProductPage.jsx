import React from 'react';
import NavbarLeft from '~/components/NavbarLeft/NavbarLeft';
import Card from '~/components/Card/Card';

import classNames from 'classnames/bind';
import styles from './TypeProductPage.module.scss';

const cx = classNames.bind(styles);

const TypeProductPage = () => {
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
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">...</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TypeProductPage;
