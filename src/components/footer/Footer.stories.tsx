import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const headings = canvas.getAllByRole('heading', { level: 3 });
    await expect(headings.length).toBeGreaterThanOrEqual(4);
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  },
};
