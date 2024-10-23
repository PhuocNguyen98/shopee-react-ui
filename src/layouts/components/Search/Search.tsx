import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Popper from '~/components/Popper';
import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect((): any => {
    const handleOutSideClick = (event: MouseEvent): void => {
      if (inputRef.current && !inputRef.current?.contains(event.target as Node)) {
        setIsShow(false);
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);

    return () => [window.removeEventListener('mousedown', handleOutSideClick)];
  }, [inputRef]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('form__group')}>
          <input
            ref={inputRef}
            type='text'
            placeholder='Bạn đang tìm gì...'
            className={cx('form-group__input')}
            onClick={() => setIsShow(true)}
          />
          <Popper isShow={isShow} isArrow={false} isFullWidth={true}>
            <div className={cx('search-history__wrap')}>
              <span className={cx('search-history__title')}>Lịch sử tìm kiếm</span>
              <ul className={cx('search-history__list')}>
                <li className={cx('search-history__item')}>
                  <Link to='/' className={cx('search-history__link')}>
                    Sản phẩm 1
                  </Link>
                </li>
                <li className={cx('search-history__item')}>
                  <Link to='/' className={cx('search-history__link')}>
                    Sản phẩm 2
                  </Link>
                </li>
                <li className={cx('search-history__item')}>
                  <Link to='/' className={cx('search-history__link')}>
                    Sản phẩm 3
                  </Link>
                </li>
              </ul>
            </div>
          </Popper>
        </div>
        <button className={cx('btn__search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('btn-search__icon')} />
        </button>
      </div>
    </div>
  );
}

export default Search;
