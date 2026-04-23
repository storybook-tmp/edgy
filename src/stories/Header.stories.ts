import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

const meta = {
  title: 'AI Generated/Medium/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    user: null,
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};

export const LoggedIn: Story = {
  args: {
    user: { name: 'Jane Doe' },
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};
