import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useMutationHooks } from '~/hooks/useMutationHook';
import * as UserService from '~/services/UserService';

import classNames from 'classnames/bind';
import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

const SignUp = () => {
    const navigate = useNavigate();

    // handle email, password, confirmPassword --------------------------------------------------
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowconfirmPassword, setisShowconfirmPassword] = useState(false);

    const mutation = useMutationHooks((data) => UserService.createUser(data));
    const { data, isSuccess } = mutation;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if (data?.status === 'OK' && isSuccess) {
            navigate('/login');
        }
        return;
    }, [isSuccess]);

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

    const handleSignUp = async () => {
        mutation.mutate({
            email,
            password,
            confirmPassword,
        });
        setIsLoading(true);
        await delay(3000);
        setIsLoading(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-auth')}>
                <form action="">
                    <h2>Create Account</h2>
                    <div className={cx('input-box')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input placeholder="..." value={email} type="email" onChange={handleOnchangeEmail} />
                        <label>Email</label>
                        {data?.status === 'Error' && <span className={cx('message-err')}>{data?.message}</span>}
                        {data?.status === 'Error-empty-email' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
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
                        {data?.status === 'Error-empty-password' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
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
                        {data?.status === 'Error-confirmPassword' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
                        {data?.status === 'Error-empty-confirmPassword' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
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
                        {isLoading ? 'Loading...' : 'Register'}
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
