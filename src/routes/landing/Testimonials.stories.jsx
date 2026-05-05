import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

export default {
  component: Testimonials,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toBeVisible();
    await expect(canvas.getByText(/catherine black/i)).toBeVisible();
  },
};

export const Quote = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/once we begin interacting/i)).toBeVisible();
  },
};

export const Attribution = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ceo, edgy/i)).toBeVisible();
  },
};
