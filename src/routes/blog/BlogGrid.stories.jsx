import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

const meta = {
  component: BlogGrid,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgy blog/i)).toBeVisible();
    await expect(canvas.getByText(/how to start an instagram blog/i)).toBeVisible();
  },
};
