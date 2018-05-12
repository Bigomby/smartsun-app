export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        redirect: 'dashboard',
      },
      {
        path: 'dashboard',
        component: () => import('pages/dashboard'),
      },
      {
        path: 'machines',
        component: () => import('pages/machines'),
      },
    ],
  },

  {
    path: '*',
    component: () => import('pages/404'),
  },
];
