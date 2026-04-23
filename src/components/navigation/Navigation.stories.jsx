import Navigation from './Navigation';

/** @type {import('@storybook/react').Meta<typeof Navigation>} */
const meta = {
  title: 'AI Generated/Medium/Navigation',
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
