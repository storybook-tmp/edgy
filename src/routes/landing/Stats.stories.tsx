import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = {
  component: Stats,
  tags: ['ai-generated'],
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/trusted by thousands/i)).toBeVisible();
  },
};
