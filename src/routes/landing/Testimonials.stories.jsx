import { expect, within } from 'storybook/test';
import Testimonials from './Testimonials';

export default {
  component: Testimonials,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/catherine black/i)).toBeVisible();
    await expect(canvas.getByText(/ceo, edgy/i)).toBeVisible();
  },
};

export const WithQuoteContent = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/once we begin interacting with your target audience/i),
    ).toBeVisible();
  },
};
