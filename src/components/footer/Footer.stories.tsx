import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /about/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /pricing/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/edgy, inc. all rights reserved/i)
    ).toBeVisible();
  },
};
