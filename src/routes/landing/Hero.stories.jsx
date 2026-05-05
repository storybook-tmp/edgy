import { expect } from 'storybook/test';
import Hero from './Hero';

export default {
  component: Hero,
};

export const Default = {
  render: () => <Hero />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const SubmittedWithValidEmail = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/hold tight/i)).toBeVisible();
  },
};

export const ValidationError = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'not-an-email');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};
