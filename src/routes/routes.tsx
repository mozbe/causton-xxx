import Layout from '@components/Layout';
import Links from '@pages/Links';
import NotLoggedIn from '@pages/NotLoggedIn';
import NoMatch from '@pages/NoMatch';

export const routes = [
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        index: true,
        element: <Links />,
      },
      {
        path: 'login',
        element: <NotLoggedIn />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
];
