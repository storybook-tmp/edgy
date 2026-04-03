import type { Meta, StoryObj } from '@storybook/react-vite';
import SignIn from './SignIn';

const meta = {
  component: SignIn,
  args: {
    retrieveDatabase: async () => true,
    setLoggedIn: () => undefined,
    user: null,
  },
  parameters: {
    storybookApp: {
      route: '/sign-in',
    },
  },
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
