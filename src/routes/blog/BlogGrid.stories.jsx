import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

const meta = {
  component: BlogGrid,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <BlogGrid />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy blog/i })).toBeVisible();
  },
};

export const WithBlogPosts = {
  render: () => <BlogGrid />,
  play: async ({ canvas }) => {
    const links = canvas.getAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
  },
};

export const WithSubheading = {
  render: () => <BlogGrid />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/expand your brand's reach/i)).toBeVisible();
  },
};
