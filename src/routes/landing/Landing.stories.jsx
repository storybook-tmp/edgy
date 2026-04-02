import Landing from './Landing';

/** @type { import('@storybook/react').Meta<typeof Landing> } */
const meta = {
  title: 'AI Generated/Complex/Landing',
  component: Landing,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const LoggedOut = {
  args: {
    loggedIn: false,
  },
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
