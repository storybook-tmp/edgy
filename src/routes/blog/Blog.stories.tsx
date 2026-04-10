import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import blogPostsData from '../../data/blogPostsData';
import Blog from './Blog';

const meta = {
  component: Blog,
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /edgy blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', {
        name: new RegExp(`^${escapeRegExp(blogPostsData[0].title)}`, 'i'),
      })
    ).toHaveAttribute('href', blogPostsData[0].href);
  },
};

export const NewsletterValidation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const NewsletterSubmitted: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'blog@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      await canvas.findByText(/hold tight! our representative will contact/i)
    ).toBeVisible();
  },
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
