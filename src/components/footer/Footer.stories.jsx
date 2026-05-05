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
    await expect(canvas.getByRole('heading', { name: /^support$/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /company/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /legal/i })).toBeVisible();
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  },
};
