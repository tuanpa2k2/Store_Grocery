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
    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setconfirmPasswordType] = useState('password');
    const [passwordTypeIcon, setPasswordTypeIcon] = useState(faLock);

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

    const handleOnChangeIcon = () => {
        if (passwordType === 'password' || confirmPasswordType === 'password') {
            setPasswordType('text');
            setconfirmPasswordType('text');
            setPasswordTypeIcon(faUnlock);
        } else {
            setPasswordType('password');
            setPasswordTypeIcon(faLock);
        }
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
                        <input value={email} type="email" onChange={handleOnchangeEmail} />
                        <label>Email</label>
                    </div>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')} onClick={handleOnChangeIcon}>
                            <FontAwesomeIcon icon={passwordTypeIcon} />
                        </span>
                        <input type={passwordType} value={password} onChange={handleOnchangePassword} />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')} onClick={handleOnChangeIcon}>
                            <FontAwesomeIcon icon={passwordTypeIcon} />
                        </span>
                        <input
                            type={confirmPasswordType}
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
                        className={cx('btn-submit')}
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
