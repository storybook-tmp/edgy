import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

export default {
  component: Newsletter,
};

export const Default = {
  render: () => <Newsletter />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const SubmittedWithValidEmail = {
  render: () => <Newsletter />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'subscriber@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(canvas.getByText(/hold tight/i)).toBeVisible();
  },
};

export const ValidationError = {
  render: () => <Newsletter />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
