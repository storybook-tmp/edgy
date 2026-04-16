import { fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
