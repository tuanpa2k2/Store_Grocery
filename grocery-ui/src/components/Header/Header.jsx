// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { ToastContainer, toast } from 'react-toastify';

import * as UserService from '~/services/UserService';
import { resetUser } from '~/redux/slides/useSlide';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await UserService.logoutUser();
        dispatch(resetUser);
        toast.success('Logout successfully', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

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
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className={cx('menu-info')} tabIndex="-1" {...attrs}>
                                    <span>Thông tin cá nhân</span>
                                    <span>cách sử dụng</span>
                                    <span onClick={handleLogout}>đăng xuất</span>
                                </div>
                            )}
                        >
                            <div className={cx('access-account')} onClick={() => navigate('/')}>
                                {user.name}
                            </div>
                        </Tippy>
                    ) : (
                        <div className={cx('access-account')} onClick={() => navigate('/login')}>
                            Login / Register
                        </div>
                    )}
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={cx('cart-popper')} tabIndex="-1" {...attrs}>
                                <span>giỏ hàng</span>
                            </div>
                        )}
                    >
                        <div className={cx('cart-icon')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>5</span>
                        </div>
                    </Tippy>
                    {/* <div className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div> */}
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </header>
    );
};

export default Header;
