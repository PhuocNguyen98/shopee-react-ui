import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { USER_NAVBAR } from './Nav';
import routes from './routes';

interface MenuItem {
  icon?: string | React.ReactNode;
  title: string;
  path: string;
  separate?: boolean;
}

const MENU_USER_PC: MenuItem[] = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Tài khoản của tôi',
    path: routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Yêu thích',
    path: routes.favourite,
  },
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Đăng xuất',
    path: routes.logout,
    separate: true,
  },
];

const MENU_USER_TABLET: MenuItem[] = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Tài khoản của tôi',
    path: routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Yêu thích',
    path: routes.favourite,
  },
  ...USER_NAVBAR,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Đăng xuất',
    path: routes.logout,
    separate: true,
  },
];

export { MENU_USER_PC, MENU_USER_TABLET };
