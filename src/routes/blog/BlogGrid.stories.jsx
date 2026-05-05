import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

export default {
  component: BlogGrid,
};

export const Default = {
  render: () => (
    <div className="bg-gray-900 p-8">
      <BlogGrid />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy blog/i })).toBeVisible();
  },
};

export const WithPosts = {
  render: () => (
    <div className="bg-gray-900 p-8">
      <BlogGrid />
    </div>
  ),
  play: async ({ canvas }) => {
    const links = canvas.getAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
    await expect(canvas.getByText(/instagram growth strategies/i)).toBeVisible();
  },
};
