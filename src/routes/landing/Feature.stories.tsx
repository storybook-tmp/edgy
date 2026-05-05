import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Feature from './Feature';

const meta = {
  component: Feature,
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Feature />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/100% handcraft growth/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/#1 Instagram Growth Agency/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/Everything you need for your Instagram profile/i)
    ).toBeVisible();
  },
};
