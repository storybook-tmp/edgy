import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Blog from './Blog';

const meta = {
  component: Blog,
  parameters: {
    initialEntries: ['/blog'],
  },
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /edgy blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeVisible();
  },
};

export const BlogCards: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /how to start an instagram blog/i })
    ).toBeVisible();
    await expect(
      canvas.getAllByRole('presentation').length
    ).toBeGreaterThan(2);
  },
};

export const NewsletterLink: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /privacy policy/i })
    ).toHaveAttribute('href', '/privacy');
  },
};
