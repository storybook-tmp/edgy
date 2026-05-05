import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

export default {
  component: Newsletter,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /sign up for our newsletter/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const EmailInput = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText(/enter your email/i);
    await expect(input).toBeVisible();
    await userEvent.type(input, 'user@example.com');
    await expect(input).toHaveValue('user@example.com');
  },
};

export const ValidationError = {
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /notify me/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
