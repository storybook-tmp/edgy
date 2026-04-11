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

export const WithEmptySubmit = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const WithInvalidEmail = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'bad-email');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};

export const WithValidEmail = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'hello@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(canvas.getByText(/hold tight/i)).toBeVisible();
  },
};
