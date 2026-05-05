import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /Solutions/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /Support/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /Company/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /Legal/i })).toBeVisible();
  },
};

export const SocialLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Github/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Linkedin/i)).toBeInTheDocument();
  },
};

export const Copyright = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Edgy, Inc. All rights reserved/i)).toBeVisible();
  },
};
