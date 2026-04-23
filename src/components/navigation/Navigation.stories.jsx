import Navigation from './Navigation';

const meta = {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
};

export default meta;

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
