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
    await expect(canvas.getByRole('link', { name: /back to home/i })).toBeVisible();
  },
};

export const PopularPages = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Pricing/i)).toBeVisible();
    await expect(canvas.getByText(/Blog/i)).toBeVisible();
    await expect(canvas.getByText(/Jobs/i)).toBeVisible();
    await expect(canvas.getByText(/FAQ/i)).toBeVisible();
  },
};
