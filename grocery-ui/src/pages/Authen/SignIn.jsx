import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import * as UserService from '~/services/UserService';
import { useMutationHooks } from '~/hooks/useMutationHook';
import { updateUser } from '~/redux/slides/useSlide';

import classNames from 'classnames/bind';
import styles from './Authen.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const mutation = useMutationHooks((data) => UserService.loginUser(data));
    const { data, isSuccess } = mutation; // lấy data từ mutation
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if (data?.status === 'OK' && isSuccess) {
            toast.success('Đăng nhập thành công', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            navigate('/');
            localStorage.setItem('access_token', JSON.stringify(data?.access_token));

            if (data?.access_token) {
                const decoded = jwt_decode(data?.access_token);
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                }
            }
        }
    }, [isSuccess]);

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token }));
    };

    const handleOnchangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const handleOnchangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async () => {
        mutation.mutate({
            email,
            password,
        });

        setIsLoading(true);
        await delay(3000);
        setIsLoading(false);
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
                        {data?.status === 'Error-email' && <span className={cx('message-err')}>{data?.message}</span>}
                        {data?.status === 'Error-empty-email' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
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
                        {data?.status === 'Error-password' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
                        {data?.status === 'Error-empty-password' && (
                            <span className={cx('message-err')}>{data?.message}</span>
                        )}
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
                        {isLoading ? 'Loading...' : 'Login'}
                    </div>
                    <div className={cx('link')}>
                        <span>Don't you have an account?</span>
                        <p onClick={() => navigate('/register')}>Register Now</p>
                    </div>
                </form>
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
        </div>
    );
};

export default SignIn;
