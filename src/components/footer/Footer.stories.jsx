import { expect } from 'storybook/test';
import Footer from './Footer';

export default {
  component: Footer,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(canvas.getByText(/edgy, inc/i)).toBeVisible();
  },
};

export const NavigationLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
  },
};

export const LegalLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /refunds/i })).toBeVisible();
  },
};
