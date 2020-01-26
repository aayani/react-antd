import Home from './views/Home';
import Login from './views/Login';

export default [
  {
    path: '/index',
    name: 'Home',
    icon: 'ni ni-tv-2 text-primary',
    component: Home,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: '/auth',
  },
];
