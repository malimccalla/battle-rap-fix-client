export const loggedOutItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Discover',
    url: '/discover',
  },
];

export const loggedInItems = [
  ...loggedOutItems,
  {
    text: 'Dashboard',
    url: '/dashboard',
  },
];
