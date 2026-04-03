import { fn } from 'storybook/test';

import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
  parameters: {
    route: '/',
  },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  parameters: {
    session: 'authenticated',
  },
};

export const LoggedInOnProfile = {
  args: {
    loggedIn: true,
  },
  parameters: {
    route: '/profile',
    session: 'authenticated',
  },
};
