import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import BlogPost from './BlogPost';

const meta = {
  component: BlogPost,
  parameters: {
    routePath: '/blog/how-to-start-an-instagram-blog',
  },
} satisfies Meta<typeof BlogPost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InstagramBlogGuide: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', {
        name: /how to start an instagram blog/i,
      })
    ).toBeVisible();
    await expect(canvas.getAllByText(/roel aufderehar/i)).toHaveLength(2);
    await expect(canvas.getByText(/5 min read/i)).toBeVisible();
  },
};

export const PostingIdeas: Story = {
  parameters: {
    routePath: '/blog/what-to-post-on-instagram',
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', {
        name: /what to post on instagram/i,
      })
    ).toBeVisible();
    await expect(canvas.getAllByText(/brenna goyette/i)).toHaveLength(2);
    await expect(canvas.getByText(/4 min read/i)).toBeVisible();
  },
};

export const InstagramContestGuide: Story = {
  parameters: {
    routePath: '/blog/how-to-run-an-instagram-contest',
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', {
        name: /how to run an instagram contest\?/i,
      })
    ).toBeVisible();
    await expect(canvas.getAllByText(/roel aufderehar/i)).toHaveLength(2);
    await expect(canvas.getByText(/running an instagram contest/i)).toBeVisible();
  },
};
