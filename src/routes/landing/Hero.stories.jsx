import { expect, within, userEvent } from 'storybook/test';
import Hero from './Hero';

export default {
  component: Hero,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(
      canvas.getByText(/your instagram growth secret/i),
    ).toBeVisible();
    await expect(
      canvas.getByPlaceholderText(/enter your email/i),
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /start free trial/i }),
    ).toBeVisible();
  },
};

export const WithEmailValidation = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const WithInvalidEmail = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'not-an-email');
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};
