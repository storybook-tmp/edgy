import { fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
