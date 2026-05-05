import { expect } from 'storybook/test';
import Contact from './Contact';

const meta = {
  component: Contact,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Let's work together")).toBeVisible();
  },
};

export const ContactInfo = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/love to hear from you/)).toBeVisible();
  },
};

export const CareerSection = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Looking for a new career?')).toBeVisible();
    await expect(canvas.getByText('See open positions')).toBeVisible();
  },
};
