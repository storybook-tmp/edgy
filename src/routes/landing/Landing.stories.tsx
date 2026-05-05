import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Landing from './Landing';

const meta = {
  component: Landing,
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/instagram growth secret/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/100% handcraft growth/i)
    ).toBeVisible();
  },
};

export const LoggedIn: Story = {
  render: () => <Landing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/instagram growth secret/i)
    ).toBeVisible();
  },
};
