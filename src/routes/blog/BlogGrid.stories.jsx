import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

const meta = {
  component: BlogGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /edgy blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/how to start an instagram blog/i)
    ).toBeVisible();
  },
};

export const PostMetadata = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByText(/roel aufderehar/i)[0]).toBeVisible();
    await expect(canvas.getAllByText(/5 min read/i)[0]).toBeVisible();
    await expect(canvas.getAllByText(/mar 16, 2023/i)[0]).toBeVisible();
  },
};

export const InternalLinks = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /how to start an instagram blog/i })
    ).toHaveAttribute('href', '/blog/how-to-start-an-instagram-blog');
  },
};
