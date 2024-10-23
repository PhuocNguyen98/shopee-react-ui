import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faBell } from '@fortawesome/free-regular-svg-icons';
import routes from './routes';

interface NavItem {
  icon?: string | React.ReactNode;
  title: string;
  path: string;
  separate?: boolean;
}

const ANONYMOUS_NAVBAR: NavItem[] = [
  {
    title: 'Đăng ký',
    path: routes.signup,
  },
  {
    title: 'Đăng nhập',
    path: routes.login,
    separate: true,
  },
];

const USER_NAVBAR: NavItem[] = [
  {
    icon: <FontAwesomeIcon icon={faBell} />,
    title: 'Thông báo',
    path: routes.notifications,
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Trợ giúp',
    path: routes.help,
  },
];

export { ANONYMOUS_NAVBAR, USER_NAVBAR };
