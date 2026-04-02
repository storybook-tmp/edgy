import Navigation from './Navigation';
import { fn } from 'storybook/test';

export default {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
};

export const LoggedOut = {
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};
