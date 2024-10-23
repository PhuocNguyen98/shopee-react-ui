import classNames from 'classnames/bind';
import Container from 'react-bootstrap/Container';

import style from './Footer.module.scss';
const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <Container>
        <h2>Footer</h2>
      </Container>
    </div>
  );
}

export default Footer;
