import { expect, within } from 'storybook/test';
import NotFound from './NotFound';

export default {
  component: NotFound,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/this page does not exist/i)).toBeVisible();
    await expect(canvas.getByText(/sorry, we couldn/i)).toBeVisible();
  },
};

export const WithPopularLinks = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /jobs/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /back to home/i })).toBeVisible();
  },
};
