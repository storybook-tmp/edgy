import { expect, waitFor } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(canvas.getByText(/your instagram growth secret/i)).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const WithValidEmail = {
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'test@example.com');
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(canvas.getByText(/hold tight/i)).toBeVisible();
    });
  },
};

export const WithInvalidEmail = {
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'invalid-email');
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(canvas.getByText(/invalid email format/i)).toBeVisible();
    });
  },
};
