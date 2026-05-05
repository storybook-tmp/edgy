import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = {
  component: Stats,
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/valuable metrics/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/trusted by thousands of business owners/i)
    ).toBeVisible();
  },
};
