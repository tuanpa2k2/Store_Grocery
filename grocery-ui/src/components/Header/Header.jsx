// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    // const [scrolled, setScrolled] = useState(false);
    // console.log(scrolled);
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    // const handleScrolled = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //     } else setScrolled(false);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScrolled);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')} onClick={() => navigate('/')}>
                    grocery shop
                </div>
                <div className={cx('center')}>
                    <input placeholder="Search products..." spellCheck={false} />
                    <button className={cx('btnSearch')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('right')}>
                    {user?.name ? (
                        <div className={cx('access-account')} onClick={() => navigate('/login')}>
                            {user.name}
                        </div>
                    ) : (
                        <div className={cx('access-account')} onClick={() => navigate('/login')}>
                            Login
                        </div>
                    )}
                    <div className={cx('cart-icon')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>5</span>
                    </div>
                    <div className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
