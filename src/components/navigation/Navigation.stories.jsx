import Navigation from './Navigation';

/** @type { import('@storybook/react').Meta<typeof Navigation> } */
const meta = {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const LoggedOut = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const LoggedIn = {
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};
