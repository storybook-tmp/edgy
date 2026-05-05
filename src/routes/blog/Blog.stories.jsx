import { expect } from 'storybook/test';
import Blog from './Blog';

const meta = {
  component: Blog,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Edgy Blog/i)).toBeVisible();
    await expect(canvas.getByText(/Sign up for our newsletter/i)).toBeVisible();
  },
};
