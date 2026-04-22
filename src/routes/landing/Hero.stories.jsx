import { expect } from 'storybook/test';
import Hero from './Hero';

export default {
  component: Hero,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgy/i)).toBeVisible();
    await expect(canvas.getByText(/instagram growth secret/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const EmailInput = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText(/enter your email/i);
    await expect(input).toBeVisible();
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  },
};

export const ValidationError = {
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
