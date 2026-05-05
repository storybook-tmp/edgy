import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('This page does not exist')).toBeVisible();
    await expect(canvas.getByText(/Sorry, we couldn/)).toBeVisible();
  },
};

export const PopularPages = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pricing')).toBeVisible();
    await expect(canvas.getByText('Blog')).toBeVisible();
    await expect(canvas.getByText('Jobs')).toBeVisible();
    await expect(canvas.getByText('FAQ')).toBeVisible();
  },
};

export const BackToHome = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Back to home')).toBeVisible();
  },
};
