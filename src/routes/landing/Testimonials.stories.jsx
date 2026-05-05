import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

const meta = {
  component: Testimonials,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/catherine black/i)).toBeVisible();
    await expect(canvas.getByText(/ceo, edgy/i)).toBeVisible();
  },
};
