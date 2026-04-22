import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Newsletter />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /sign up for our newsletter/i })).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const ValidationError = {
  render: () => <Newsletter />,
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /notify me/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const InvalidEmailError = {
  render: () => <Newsletter />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'not-an-email');
    const submitButton = canvas.getByRole('button', { name: /notify me/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};
