import configs from '~/configs';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Cart from '~/pages/Cart';

const priveRoutes = [{ path: configs.routes.cart, component: Cart }];

const publicRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.login, component: Login },
];

export { priveRoutes, publicRoutes };
