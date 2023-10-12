import styles from './FourthPage.module.scss';
import classNames from 'classnames/bind';

import checkBoxSVG from '~/assets/icon/checkBox.svg';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function FourthPage() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h2>PROTOCOL</h2>
                    <div className={cx('content-wrapper')}>
                        <div className={cx('left-content')}>
                            <p>
                                Mute is a zkRollup based DEX, farming platform, and Bond platform built on Ethereum and
                                zkSync
                            </p>
                            <div className={cx('check-boxes')}>
                                <div className={cx('check-box')}>
                                    <img src={checkBoxSVG} alt="check"></img>
                                    <p>No account required</p>
                                </div>
                                <div className={cx('check-box')}>
                                    <img src={checkBoxSVG} alt="check"></img>
                                    <p>
                                        Professional market maker
                                    </p>
                                </div>
                                <div className={cx('check-box')}>
                                    <img src={checkBoxSVG} alt="check"></img>
                                    <p>No disposit or withdrawal fees</p>
                                </div>
                                <div className={cx('check-box')}>
                                    <img src={checkBoxSVG} alt="check"></img>
                                    <p>Creat a limit order</p>
                                </div>
                            </div>
                            <div className={cx('button-wrapper')}>
                                <Button type="solid">Connect Wallet</Button>
                                <Button type="outline">Learn More</Button>
                            </div>
                        </div>
                        <div className={cx('right-content')}>
                            <div className={cx('show-boxes')}>
                                <div className={cx('show-box')}>
                                    <p>trade volume 24h</p>
                                    <h2>80M</h2>
                                </div>
                                <div className={cx('show-box')}>
                                    <p>Total Value Locked</p>
                                    <h2>$180M</h2>
                                </div>
                                <div className={cx('show-box')}>
                                    <p>Integrations</p>
                                    <h2>500</h2>
                                </div>
                                <div className={cx('show-box')}>
                                    <p>Community Delegates </p>
                                    <h2>5,600+</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FourthPage;
