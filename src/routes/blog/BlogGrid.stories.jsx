import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

export default {
  component: BlogGrid,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy blog/i })).toBeVisible();
  },
};

export const BlogPosts = {
  play: async ({ canvas }) => {
    // Blog posts rendered from blogPostsData
    const links = canvas.getAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
  },
};

export const BlogDescription = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/instagram growth strategies/i)).toBeVisible();
  },
};
