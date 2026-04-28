import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/this page does not exist/i)).toBeVisible();
    await expect(canvas.getByText(/sorry/i)).toBeVisible();
  },
};

export const WithPopularLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pricing')).toBeVisible();
    await expect(canvas.getByText('Blog')).toBeVisible();
    await expect(canvas.getByText('Jobs')).toBeVisible();
    await expect(canvas.getByText('FAQ')).toBeVisible();
  },
};

export const WithBackToHome = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/back to home/i)).toBeVisible();
    const backLink = canvas.getByText(/back to home/i);
    await expect(backLink.closest('a')).toHaveAttribute('href', '/');
  },
};
