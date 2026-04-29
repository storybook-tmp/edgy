import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  tags: ['ai-generated'],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/this page does not exist/i)).toBeVisible();
    await expect(canvas.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/');
  },
};
