import styles from './firstPage.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import Header from '~/components/Layout/Header';
import planetIMG from '~/assets/image/BackgroundImage/planet.png';
import * as image from '~/assets/image/validators';

import backgroundImg from '~/assets/image/BackgroundImage/galaxy-primary.png'

let IMAGE_LISTs = new Array(8).fill(0);

const cx = classNames.bind(styles);

function FirstPage() {
    return (
        <section className={cx('wrapper')}  style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className={cx('container')}>
                <Header />
                <div className={cx('image-wrapper')}>
                    <img className={cx('small-planet')} src={planetIMG} alt="planet"></img>
                    <img className={cx('big-planet')} src={planetIMG} alt="planet"></img>
                    <div className={cx('top-flare')}></div>
                    <div className={cx('left-flare')}></div>
                    <div className={cx('right-flare')}></div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('text-wrapper')}>
                        <div className={cx('big-title')}>
                            Seamless and <span>Efficient Trading</span> on zk Rollups
                        </div>
                        <div className={cx('mid-content')}>
                            <p>
                                Invest & trade, earn yields, and participate in Bonds all on one decentralized, community
                                driven platform.
                            </p>
                        </div>
                    </div>
                    <div className={cx('button-wrapper')}>
                        <Button type="solid">Enter App</Button>
                        <Button type="outline" style={{ marginLeft: 20 }}>
                            Read the docs
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('swiper-wrapper')}>
                {IMAGE_LISTs.map((data, index) => {
                    return (
                        <div className={cx('image-container')}>
                            <img key={index} alt="validator" src={image[`img${index+1}`]}></img>
                        </div>
                    );
                })}
                {IMAGE_LISTs.map((data, index) => {
                    return (
                        <div className={cx('image-container')}>
                            <img key={index} alt="validator" src={image[`img${index+1}`]}></img>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FirstPage;
