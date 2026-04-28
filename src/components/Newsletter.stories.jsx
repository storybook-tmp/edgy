import { expect, waitFor } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const WithValidSubmission = {
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'user@example.com');
    const submitButton = canvas.getByRole('button', { name: /notify me/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(canvas.getByText(/hold tight/i)).toBeVisible();
    });
  },
};

export const WithEmptySubmission = {
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /notify me/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(canvas.getByText(/empty email field/i)).toBeVisible();
    });
  },
};
