import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Newsletter.module.scss';

const cx = classNames.bind(styles);

const Newsletter = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('newsletter-content')}>
                <span
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('big-text')}
                >
                    hãy theo dõi chúng tôi để cập nhập nhiều sảng phẩm mới nhất{' '}
                </span>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('form')}
                >
                    <input type="text" placeholder="Email address" />
                    <button>Send mail</button>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('text')}
                >
                    Will be any more
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('social-icons')}
                >
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
