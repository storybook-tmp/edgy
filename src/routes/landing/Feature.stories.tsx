import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Feature from './Feature';

const meta = {
  component: Feature,
  tags: ['ai-generated'],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/#1 instagram growth agency/i)).toBeVisible();
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const heading = canvas.getByText(/100% handcraft growth/i);
    // This heading uses text-[color:var(--primary-font-color)] which is rgb(147, 157, 250)
    await expect(getComputedStyle(heading).color).toBe('rgb(147, 157, 250)');
  },
};
