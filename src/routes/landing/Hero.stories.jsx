import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const EmailValidation = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const InvalidEmail = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'notanemail', { delay: 30 });
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};

export const SuccessfulSubmission = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'test@example.com', { delay: 30 });
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/hold tight/i)).toBeVisible();
  },
};
