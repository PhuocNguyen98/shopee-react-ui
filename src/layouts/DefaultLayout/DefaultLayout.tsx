import React from 'react';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('content')}>{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
