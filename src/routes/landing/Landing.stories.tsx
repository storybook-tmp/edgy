import type { Meta, StoryObj } from '@storybook/react-vite';
import Landing from './Landing';

const meta = {
  component: Landing,
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Landing loggedIn={false} />,
};

export const LoggedIn: Story = {
  render: () => <Landing loggedIn={true} />,
};
