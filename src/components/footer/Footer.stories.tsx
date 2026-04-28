import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = preview.meta({
  component: Footer,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /solutions/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /^support$/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /company/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /legal/i })).toBeVisible();
    await expect(canvas.getByText(/edgy, inc/i)).toBeVisible();
  },
});

export const HasSocialLinks = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /github/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /linkedin/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /portfolio/i })).toBeVisible();
  },
});

export const HasNavigationLinks = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
  },
});
