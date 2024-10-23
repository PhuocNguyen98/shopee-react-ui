import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faBell } from '@fortawesome/free-regular-svg-icons';

import Search from '../Search';
import Cart from '~/components/Cart';
import Menu from '~/components/Popper/Menu';
import MenuMobile from '../MenuMobile';

import configs from '~/configs';
import images from '~/assets/images';
import style from './Header.module.scss';
import routes from '~/configs/routes';

const cx = classNames.bind(style);

const ANONYMOUS_NAV = configs.ANONYMOUS_NAVBAR;
const USER_NAV = configs.USER_NAVBAR;

function Header() {
  const [user, setUser] = React.useState<boolean>(true);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [isShowCart, setIsShowCart] = React.useState<boolean>(false);
  const [isShowMenuTabletMobile, setIsShowMenuTabletMobile] = React.useState<boolean>(false);

  const renderNav = (nav: any): React.ReactElement => {
    return (
      <>
        {nav.length > 0 ? (
          <ul className={cx('actions')}>
            {nav.map((item: any, index: number) => (
              <li key={index} className={cx('action__item', { separate: item.separate })}>
                <Link to={item.path} className={cx('action__link')}>
                  {item.icon}
                  <span className={cx('action__title')}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </>
    );
  };

  return (
    <div className={cx('wrapper')}>
      <Container>
        <div className={cx('header__top')}>
          <div className={cx('header__user')}>
            {!user ? (
              renderNav(ANONYMOUS_NAV)
            ) : (
              <>
                {renderNav(USER_NAV)}
                <div
                  className={cx('user__content')}
                  onMouseEnter={() => setIsShow(!isShow)}
                  onMouseLeave={() => setIsShow(!isShow)}
                >
                  <img src={images.avatar} alt='Avatar' className={cx('user__avatar')} />
                  <span className={cx('user__name')}>Nguyễn Hữu Phước</span>
                  <Menu isShow={isShow}></Menu>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={cx('header__body')}>
          <div className={cx('header__logo')}>
            <Link to={configs.routes.home}>
              <img src={images.logo} alt='Logo' className={cx('logo__img')} />
            </Link>
          </div>

          <div className={cx('header__search')}>
            <Search />
          </div>

          <div className={cx('cart__wrapper')}>
            {!user ? (
              <Link to={routes.login} className={cx('cart')}>
                <FontAwesomeIcon icon={faCartShopping} className={cx('cart__icon')} />
              </Link>
            ) : (
              <div
                className={cx('cart')}
                onMouseEnter={() => setIsShowCart(!isShowCart)}
                onMouseLeave={() => setIsShowCart(!isShowCart)}
              >
                <FontAwesomeIcon icon={faCartShopping} className={cx('cart__icon')} />
                <span className={cx('cart__badge')}>3</span>
                <Cart isShow={isShowCart}></Cart>
              </div>
            )}
          </div>

          {!user ? (
            <Link to={routes.login} className={cx('title__login')}>
              Đăng nhập
            </Link>
          ) : (
            <>
              <div className={cx('menu__tablet-mobile')}>
                <span
                  className={cx('menu__icon')}
                  onClick={() => setIsShowMenuTabletMobile(!isShowMenuTabletMobile)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </span>
                <MenuMobile
                  isShow={isShowMenuTabletMobile}
                  setShow={setIsShowMenuTabletMobile}
                ></MenuMobile>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
