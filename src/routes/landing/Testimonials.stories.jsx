import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

const meta = {
  component: Testimonials,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Catherine Black/i)).toBeVisible();
    await expect(canvas.getByText(/CEO, Edgy/i)).toBeVisible();
    await expect(
      canvas.getByText(/Once we begin interacting with your target audience/i)
    ).toBeVisible();
  },
};
