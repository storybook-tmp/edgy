import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = preview.meta({
  component: Footer,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Solutions')).toBeVisible();
    await expect(canvas.getByText('Support')).toBeVisible();
    await expect(canvas.getByText('Company')).toBeVisible();
    await expect(canvas.getByText('Legal')).toBeVisible();
    await expect(canvas.getByText(/Edgy, Inc. All rights reserved/)).toBeVisible();
  },
});

export const NavigationLinks = meta.story({
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /terms/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /privacy/i })).toBeVisible();
  },
});

export const SocialLinks = meta.story({
  render: () => <Footer />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Github')).toBeInTheDocument();
    await expect(canvas.getByText('Linkedin')).toBeInTheDocument();
    await expect(canvas.getByText('Portfolio')).toBeInTheDocument();
  },
});
