import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /solutions/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /support/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /company/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /legal/i })).toBeVisible();
  },
};

export const WithSocialLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Github')).toBeInTheDocument();
    await expect(canvas.getByText('Linkedin')).toBeInTheDocument();
    await expect(canvas.getByText('Portfolio')).toBeInTheDocument();
  },
};

export const WithCopyright = {
  play: async ({ canvas }) => {
    const currentYear = new Date().getFullYear().toString();
    await expect(canvas.getByText(currentYear)).toBeVisible();
    await expect(canvas.getByText(/edgy, inc/i)).toBeVisible();
  },
};
