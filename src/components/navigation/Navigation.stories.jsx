import { fn } from 'storybook/test';
import Navigation from './Navigation';

export default {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
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
