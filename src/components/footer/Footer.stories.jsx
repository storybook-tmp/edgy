import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Solutions')).toBeVisible();
    await expect(canvas.getByText('Support')).toBeVisible();
    await expect(canvas.getByText('Company')).toBeVisible();
    await expect(canvas.getByText('Legal')).toBeVisible();
  },
};

export const SocialLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Github')).toBeInTheDocument();
    await expect(canvas.getByText('Portfolio')).toBeInTheDocument();
    await expect(canvas.getByText('Linkedin')).toBeInTheDocument();
  },
};

export const CssCheck = {
  play: async ({ canvas }) => {
    const footer = canvas.getByRole('contentinfo');
    // bg-gray-900 in Tailwind v4 — proves global CSS loaded
    await expect(getComputedStyle(footer).backgroundColor).toBe(
      'oklch(0.21 0.034 264.665)',
    );
  },
};
