import Navigation from './Navigation';

const meta = {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
  args: {
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
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
