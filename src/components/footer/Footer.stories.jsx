import { expect } from 'storybook/test';
import Footer from './Footer';

export default {
  component: Footer,
};

export const Default = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  },
};

export const FooterLinks = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
  },
};

export const SocialLinks = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /github/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /linkedin/i })).toBeVisible();
  },
};
