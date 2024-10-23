import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './MenuMobile.module.scss';
import { Link } from 'react-router-dom';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import configs from '~/configs';
import images from '~/assets/images';
import * as React from 'react';

const cx = classNames.bind(style);

const MENU = configs.MENU_USER_TABLET;

type Props = { isShow: boolean; setShow: Function };

function MenuMobile({ isShow, setShow }: Props) {
  return (
    <div className={cx('wrapper', { show: isShow })}>
      <div className={cx('overlay')} onClick={() => setShow(!isShow)}></div>

      <div className={cx('inner', { show: isShow })}>
        <span className={cx('menu__icon-close')} onClick={() => setShow(!isShow)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>

        <div className={cx('user__info')}>
          <img src={images.avatar} alt='Avatar' className={cx('user__avatar')} />
          <span className={cx('user__name')}>Nguyễn Hữu Phước</span>
        </div>

        <ul className={cx('actions')}>
          {MENU.map((item, index) => (
            <li key={index} className={cx('action__item', { separate: item.separate })}>
              <Link to={item.path} className={cx('action__link', { separate: item.separate })}>
                {item.icon}
                <span className={cx('action__title')}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
