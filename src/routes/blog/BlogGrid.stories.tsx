import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

const meta = preview.meta({
  component: BlogGrid,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgy blog/i)).toBeVisible();
    await expect(
      canvas.getByText(/expand your brand's reach/i),
    ).toBeVisible();
  },
});

export const HasBlogPosts = meta.story({
  play: async ({ canvas }) => {
    // Blog posts show links to individual posts
    const postLinks = canvas.getAllByRole('link');
    await expect(postLinks.length).toBeGreaterThanOrEqual(3);
  },
});

export const HasAuthorInfo = meta.story({
  play: async ({ canvas }) => {
    const readTimes = canvas.getAllByText(/read$/i);
    await expect(readTimes.length).toBeGreaterThanOrEqual(1);
  },
});
