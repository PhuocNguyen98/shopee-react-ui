import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cx = classNames.bind(style);
type Props = {
  children: React.ReactNode;
  isShow: boolean;
  isArrow?: boolean;
  isFullWidth?: boolean;
  isRight?: boolean;
};

function Popper({ children, isShow, isArrow = true, isFullWidth = false, isRight = false }: Props) {
  return (
    <div className={cx('wrapper', { show: isShow })}>
      <div className={cx('inner', { arrow: isArrow, full__width: isFullWidth, right: isRight })}>
        {children}
      </div>
    </div>
  );
}

export default Popper;
