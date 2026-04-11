import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: () => <Pricing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/Instagram Growth Plans/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/Pricing/i)
    ).toBeVisible();
  },
};

export const LoggedIn: Story = {
  render: () => <Pricing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/Instagram Growth Plans/i)
    ).toBeVisible();
  },
};
