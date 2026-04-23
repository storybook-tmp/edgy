import type { Meta, StoryObj } from '@storybook/react-vite';
import Cta from './Cta';

const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
} satisfies Meta<typeof Cta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
