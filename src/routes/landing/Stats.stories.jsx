import { expect, within } from 'storybook/test';
import Stats from './Stats';

export default {
  component: Stats,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/trusted by thousands of business owners/i),
    ).toBeVisible();
    await expect(canvas.getByText(/valuable metrics/i)).toBeVisible();
  },
};

export const WithStatValues = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/happy customers/i)).toBeVisible();
    await expect(canvas.getByText(/followers gained/i)).toBeVisible();
  },
};
