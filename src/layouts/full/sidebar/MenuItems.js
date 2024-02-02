import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Liste culture',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Message',
  },

  {
    id: uniqueId(),
    title: 'View message',
    icon: IconLayoutDashboard,
    href: '',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
];

export default Menuitems;
