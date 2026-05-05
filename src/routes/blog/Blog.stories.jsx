import { expect } from 'storybook/test';
import Blog from './Blog';

const meta = {
  component: Blog,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Sign up for our newsletter')).toBeVisible();
  },
};

export const BlogPosts = {
  play: async ({ canvas }) => {
    const links = canvas.getAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
  },
};

export const NewsletterSection = {
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Enter your email')).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};
