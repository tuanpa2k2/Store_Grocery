import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>grocery shop</div>
                <div className={cx('center')}>
                    <input placeholder="Search products..." spellCheck={false} />
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('right')}>
                    <div className={cx('access-account')}>tuanpa2k2@gmail.com</div>
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
