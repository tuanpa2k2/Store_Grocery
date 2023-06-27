import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

const SignUp = () => {
    const navigate = useNavigate();

    // handle email, password, confirmPassword --------------------------------------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowconfirmPassword, setisShowconfirmPassword] = useState(false);

    const handleOnchangeEmail = (e) => {
        const emailed = e.target.value;
        setEmail(emailed);
    };
    const handleOnchangePassword = (e) => {
        const passworded = e.target.value;
        setPassword(passworded);
    };
    const handleOnchangeConfirmPassword = (e) => {
        const confirmPassworded = e.target.value;
        setConfirmPassword(confirmPassworded);
    };

    const handleSignUp = () => {
        console.log('SignUp: ', email, password, confirmPassword);
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
                        <input placeholder="..." value={email} type="email" onChange={handleOnchangeEmail} />
                        <label>Email</label>
                    </div>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')} onClick={() => setIsShowPassword(!isShowPassword)}>
                            <FontAwesomeIcon icon={isShowPassword ? faUnlock : faLock} />
                        </span>
                        <input
                            placeholder="..."
                            type={isShowPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleOnchangePassword}
                        />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')} onClick={() => setisShowconfirmPassword(!isShowconfirmPassword)}>
                            <FontAwesomeIcon icon={isShowconfirmPassword ? faUnlock : faLock} />
                        </span>
                        <input
                            placeholder="..."
                            type={isShowconfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleOnchangeConfirmPassword}
                        />
                        <label htmlFor="">Confirm Password</label>
                    </div>
                    <div className={cx('remember-forgot')}>
                        <label>
                            <input type="checkbox" />I accept all privacy account terms
                        </label>
                    </div>
                    <div
                        className={cx(`btn-submit`)}
                        onClick={handleSignUp}
                        disabled={!email.length || !password.length || confirmPassword.length}
                    >
                        Register
                    </div>
                    <div className={cx('link')}>
                        <span>You have an account?</span>
                        <p onClick={() => navigate('/login')}>login now</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
