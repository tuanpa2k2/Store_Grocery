import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleOnchangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const handleOnchangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {
        console.log('handleLogin:', email, password);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-auth')}>
                <form action="">
                    <h2>Login Account</h2>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input value={email} type="email" onChange={handleOnchangeEmail} placeholder="..." />
                        <label>Email</label>
                    </div>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')} onClick={() => setIsShowPassword(!isShowPassword)}>
                            <FontAwesomeIcon icon={isShowPassword ? faUnlock : faLock} />
                        </span>
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleOnchangePassword}
                            placeholder="..."
                        />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className={cx('remember-forgot')}>
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <p onClick={() => navigate('/forgot-password')}>Forgot password?</p>
                    </div>
                    <div
                        className={cx('btn-submit')}
                        onClick={handleLogin}
                        disabled={!email.length || !password.length}
                    >
                        Login
                    </div>
                    <div className={cx('link')}>
                        <span>Don't you have an account?</span>
                        <p onClick={() => navigate('/register')}>Register Now</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
