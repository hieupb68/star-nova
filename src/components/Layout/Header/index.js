import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import logoImg from '~/assets/image/logo/starNovaLogo.png'
import rightArrow from '~/assets/icon/rightArrow.svg'
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Header() {


    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}> 
                <a href="logo" className={cx('logo-wrapper')}>
                    <img alt="logo" src={logoImg}></img>
                </a>
                <div className={cx('content')}>
                    <div className={cx('page-lists')}>
                        <a className={cx('list')} href="#list">Home</a>
                        <a className={cx('list')} href="#list">Trade</a>
                        <a className={cx('list')} href="#list">Pools</a>
                        <a className={cx('list')} href="#list">Farms</a>
                        <a className={cx('list')} href="#list">Bridge</a>
                        <a className={cx('list')} href="#list">Docs</a>
                    </div>
                    <div className={cx('button-wrapper')}>
                        <Button type="solid">
                            ENTER APP
                            <img alt="arrow" src={rightArrow} style={{marginLeft:10}}></img>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
