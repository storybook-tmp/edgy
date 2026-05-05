import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const ValidationError = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const SuccessfulSubmission = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'test@example.com', { delay: 30 });
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(canvas.getByText(/hold tight/i)).toBeVisible();
  },
};
