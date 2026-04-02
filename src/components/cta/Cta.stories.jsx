import Cta from './Cta';

/** @type { import('@storybook/react').Meta<typeof Cta> } */
const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
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
