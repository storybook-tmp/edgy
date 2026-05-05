import { expect, within } from 'storybook/test';
import Footer from './Footer';

export default {
  component: Footer,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: /solutions/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /^support$/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /company/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /legal/i })).toBeVisible();
  },
};

export const WithSocialLinks = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/edgy, inc/i)).toBeVisible();
    await expect(canvas.getByRole('link', { name: /github/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /linkedin/i })).toBeVisible();
  },
};

export const WithNavigationLinks = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
  },
};
