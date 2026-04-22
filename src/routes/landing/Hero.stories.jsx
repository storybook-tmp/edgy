import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Hero />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgy/i)).toBeVisible();
    await expect(canvas.getByText(/your instagram growth secret/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const WithEmailForm = {
  render: () => <Hero />,
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const ValidationError = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
