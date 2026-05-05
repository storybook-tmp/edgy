import { expect } from 'storybook/test';
import NotFound from './NotFound';

export default {
  component: NotFound,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/this page does not exist/i)).toBeVisible();
  },
};

export const HelpfulLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
  },
};

export const BackToHome = {
  play: async ({ canvas }) => {
    const backLink = canvas.getByRole('link', { name: /back to home/i });
    await expect(backLink).toBeVisible();
    await expect(backLink).toHaveAttribute('href', '/');
  },
};
