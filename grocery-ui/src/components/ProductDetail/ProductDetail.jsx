import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faMoneyCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import prop from '../../assets/images/product.jpg';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('col-left')}>
                <div className={cx('image-big')}>
                    <img src={prop} alt="img" />
                </div>
                <div className={cx('image-small')}>
                    <div className={cx('image-small-children')}>
                        <img src={prop} alt="img" />
                    </div>
                    <div className={cx('image-small-children')}>
                        <img src={prop} alt="img" />
                    </div>
                    <div className={cx('image-small-children')}>
                        <img src={prop} alt="img" />
                    </div>
                    <div className={cx('image-small-children')}>
                        <img src={prop} alt="img" />
                    </div>
                </div>
            </div>
            <div className={cx('col-right')}>
                <div className={cx('name')}>Name products</div>
                <div className={cx('title-text')}>
                    price:
                    <span className={cx('price')}>6000$</span>
                    <span className={cx('discount')}>-25%</span>
                </div>
                <div className={cx('title-text')}>
                    description:
                    <span className={cx('desc')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, animi eum id nostrum fugit ex
                        porro corrupti cupiditate iure provident! Architecto numquam praesentium distinctio cumque,
                        illum ipsam ipsum explicabo accusantium.
                    </span>
                </div>
                <div className={cx('action-btn')}>
                    <div className={cx('wrapper-quantity')}>
                        <span className={cx('text')}>Quantity: </span>
                        <span className={cx('quantity')}>
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </span>
                    </div>
                    <div className={cx('wrapper-address')}>
                        <span className={cx('text')}>Address: </span>
                        <span className={cx('address')}>
                            <p onClick={() => navigate('#')}>Thanh xuân - Thuần thành - thái thụy - thái bình</p>
                        </span>
                        <span className={cx('change-address')}>
                            Change
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                    </div>
                    <div className={cx('wrapper-btn-add')}>
                        <button className={cx('add-to-cart-btn')}>
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            <span>Add to cart</span>
                        </button>
                        <button className={cx('add-to-cart-btn')}>
                            <FontAwesomeIcon icon={faMoneyCheck} />
                            <span>Checkout now</span>
                        </button>
                    </div>
                </div>
                <div className={cx('devider')}></div>
                {/* <div className="info-item">
                    <span>
                        Share:
                        <span className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faFaceAngry} />
                            <FontAwesomeIcon icon={faEnvelope} />
                            <FontAwesomeIcon icon={faSquare} />
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </span>
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default ProductDetail;
