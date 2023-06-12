import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Newsletter.module.scss';

const cx = classNames.bind(styles);

const Newsletter = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('newsletter-content')}>
                <span className={cx('big-text')}>hãy theo dõi chúng tôi để cập nhập nhiều sảng phẩm mới nhất </span>
                <div className={cx('form')}>
                    <input type="text" placeholder="Email address" />
                    <button>Send mail</button>
                </div>
                <div className={cx('text')}>Will be any more</div>
                <div className={cx('social-icons')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
