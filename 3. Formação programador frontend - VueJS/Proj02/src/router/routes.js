const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SignIn.vue'), alias: '' },
      { path: 'signup', component: () => import('pages/SignUp.vue') },
      { path: 'main', component: () => import('pages/IndexPage.vue') },
      { path: 'user', component: () => import('pages/UserPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
