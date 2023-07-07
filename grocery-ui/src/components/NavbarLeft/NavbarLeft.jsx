import React from 'react';

import classNames from 'classnames/bind';
import styles from './NavbarLeft.module.scss';
const cx = classNames.bind(styles);

const NavbarLeft = () => {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((opp, index) => {
                    return (
                        <span key={index} className={cx('text-value')}>
                            {opp}
                        </span>
                    );
                });

            case 'checkbox':
                return options.map((opp, index) => {
                    return (
                        <div key={index} className={cx('form-group-checkbox')}>
                            <input type="checkbox" name="check1" value={opp.value} />
                            <label className={cx('text-value-checkbox')}>{opp.label}</label>
                        </div>
                    );
                });

            case 'price':
                return options.map((opp, index) => {
                    return (
                        <div key={index} className={cx('form-group-price')}>
                            {opp}
                        </div>
                    );
                });

            default:
                return {};
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('text-categories')}>
                    <div className={cx('text-label')}>Danh mục</div>
                    {renderContent('text', ['Ti vi', 'điều hòa', 'máy giặt'])}
                </div>
                <div className={cx('checkbox-place')}>
                    <div className={cx('text-label')}>địa điểm</div>
                    {renderContent('checkbox', [
                        { value: 'a', label: 'Ha Noi' },
                        { value: 'b', label: 'Thai Binh' },
                        { value: 'c', label: 'Ho Chi Minh' },
                    ])}
                </div>
                <div className={cx('text-price')}>
                    <div className={cx('text-label')}>giá (VND)</div>
                    {renderContent('price', ['dưới 100.000', 'từ 100.000 đến 500.000', 'trên 500.000'])}
                </div>
            </div>
        </>
    );
};

export default NavbarLeft;
