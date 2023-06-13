import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <section>
                <div className={cx('login-box')}>
                    <form action="">
                        <h2>register account</h2>
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
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input name="password" type="password" required />
                            <label htmlFor="">Confirm password</label>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <label>
                                <input type="checkbox" />I accept all privacy account terms
                            </label>
                        </div>
                        <button>Register now</button>
                        <div className={cx('link')}>
                            <span>You have an account?</span>
                            <p onClick={() => navigate('/login')}>login now</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
