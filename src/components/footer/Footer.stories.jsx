import { expect } from 'storybook/test';
import Footer from './Footer';

export default {
  component: Footer,
};

export const Default = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(canvas.getByText(/edgy, inc/i)).toBeVisible();
  },
};

export const WithLinks = {
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
  },
};
