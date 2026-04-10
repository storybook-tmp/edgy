import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import Footer from './Footer';

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/2026/)).toBeVisible();
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  },
};

export const SupportLinks: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /^pricing$/i })).toHaveAttribute(
      'href',
      '/pricing'
    );
    await expect(canvas.getByRole('link', { name: /^faq$/i })).toHaveAttribute(
      'href',
      '/faq'
    );
    await expect(
      canvas.getByRole('link', { name: /^contact$/i })
    ).toHaveAttribute('href', '/contact');
  },
};

export const SocialLinks: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /github/i })
    ).toHaveAttribute('target', '_blank');
    await expect(
      canvas.getByRole('link', { name: /portfolio/i })
    ).toHaveAttribute('target', '_blank');
    await expect(
      canvas.getByRole('link', { name: /linkedin/i })
    ).toHaveAttribute('target', '_blank');
  },
};
