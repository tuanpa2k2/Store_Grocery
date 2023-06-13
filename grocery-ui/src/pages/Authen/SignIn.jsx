import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <section>
                <div className={cx('login-box')}>
                    <form action="">
                        <h2>Login Account</h2>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input name="password" type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            {/* <a href="#">Forgot password?</a> */}
                            <p onClick={() => navigate('/forgot-password')}>Forgot password?</p>
                        </div>
                        <button>Login</button>
                        <div className={cx('link')}>
                            <span>Don't you have an account?</span>
                            <p onClick={() => navigate('/register')}>Register Now</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
