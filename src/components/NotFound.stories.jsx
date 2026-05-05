import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('This page does not exist'),
    ).toBeVisible();
    await expect(
      canvas.getByText(/sorry, we couldn.t find the page/i),
    ).toBeVisible();
  },
};

export const NavigationLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pricing')).toBeVisible();
    await expect(canvas.getByText('Blog')).toBeVisible();
    await expect(canvas.getByText('Jobs')).toBeVisible();
    await expect(canvas.getByText('FAQ')).toBeVisible();
    await expect(canvas.getByRole('link', { name: /back to home/i })).toBeVisible();
  },
};
