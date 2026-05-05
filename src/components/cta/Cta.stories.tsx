import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
} satisfies Meta<typeof Cta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: () => <Cta loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/ready to dive in/i)
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toBeVisible();
  },
};

export const LoggedIn: Story = {
  render: () => <Cta loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/ready to dive in/i)
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toBeVisible();
  },
};
