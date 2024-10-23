import * as React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Popper from '../Popper';
import style from './Menu.module.scss';
import configs from '~/configs';

const cx = classNames.bind(style);

const MENU = configs.MENU_USER_PC;

type Props = {
  isShow: boolean;
};

function Menu({ isShow }: Props) {
  return (
    <Popper isShow={isShow}>
      <ul className={cx('list__menu')}>
        {MENU.map((item, index) => (
          <li key={index} className={cx('item__menu', { separate: item.separate })}>
            <Link to={item.path} className={cx('item-menu__link')}>
              {item.icon}
              <span className={cx('item-menu__title')}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Popper>
  );
}

export default Menu;
