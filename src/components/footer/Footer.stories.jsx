import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /contact/i })).toBeVisible();
  },
};

export const WithLegalLinks = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /refunds/i })).toBeVisible();
  },
};

export const WithCopyright = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgy, inc\. all rights reserved/i)).toBeVisible();
  },
};
