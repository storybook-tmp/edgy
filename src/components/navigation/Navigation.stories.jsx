import Navigation from './Navigation';

export default {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
};

export const LoggedOut = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};
