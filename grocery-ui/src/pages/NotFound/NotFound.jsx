import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Notfound.module.scss';
const cx = classNames.bind(styles);

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div>
                <FontAwesomeIcon icon={faTriangleExclamation} />
            </div>
            <div className={cx('text')}>Not found page</div>
            <div className={cx('btn-goback')} onClick={() => navigate('/')}>
                Go back
            </div>
        </div>
    );
};

export default NotFound;
