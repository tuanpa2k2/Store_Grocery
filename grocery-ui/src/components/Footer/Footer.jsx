import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-content')}>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('col')}
                >
                    <div className={cx('title')}>About</div>
                    <div className={cx('text')}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus beatae nesciunt maiores
                        molestiae dolore. Fuga, minus saepe facere perspiciatis voluptate soluta aspernatur dolorum sed
                        amet temporibus in iusto eligendi expedita.
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('col')}
                >
                    <div className={cx('title')}>Contact</div>
                    <div className={cx('c-item')}>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <div className={cx('text')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas magnam animi impedit
                            ducimus magni fuga molestias unde repellat!
                        </div>
                    </div>
                    <div className={cx('c-item')}>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <div className={cx('text')}>Phone: 0336 526 9311</div>
                    </div>
                    <div className={cx('c-item')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div className={cx('text')}>Email: tuanpa2k2@gmail.com</div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('col')}
                >
                    <div className={cx('title')}>Categories</div>
                    <span className={cx('text')}>Books English</span>
                    <span className={cx('text')}>Máy tính</span>
                    <span className={cx('text')}>Đồ dùng học tập</span>
                    <span className={cx('text')}>Điện thoại</span>
                    <span className={cx('text')}>Giày dép</span>
                    <span className={cx('text')}>Quần áo</span>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className={cx('col')}
                >
                    <div className={cx('title')}>Page</div>
                    <span className={cx('text')}>home</span>
                    <span className={cx('text')}>about</span>
                    <span className={cx('text')}>Contact us</span>
                    <span className={cx('text')}>facebook</span>
                    <span className={cx('text')}>React JS</span>
                </div>
            </div>
            <div className={cx('bottom-bar')}>
                <div className={cx('bottom-bar-content')}>
                    <div className={cx('text')}>created by TuanPA - Latest Design Template.</div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
