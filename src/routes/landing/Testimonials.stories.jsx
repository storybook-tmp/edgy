import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

const meta = {
  component: Testimonials,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Catherine Black')).toBeVisible();
    await expect(canvas.getByText('CEO, Edgy')).toBeVisible();
    await expect(canvas.getByText(/once we begin interacting/i)).toBeVisible();
  },
};

export const WithQuoteContent = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/increase in traffic to your instagram profile/i)
    ).toBeVisible();
  },
};

export const WithAvatar = {
  play: async ({ canvas }) => {
    const images = canvas.getAllByRole('presentation');
    await expect(images.length).toBeGreaterThan(0);
  },
};
