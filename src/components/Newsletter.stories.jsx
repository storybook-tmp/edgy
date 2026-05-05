import { expect, waitFor } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Sign up for our newsletter')).toBeVisible();
    await expect(canvas.getByPlaceholderText('Enter your email')).toBeVisible();
    await expect(canvas.getByRole('button', { name: /notify me/i })).toBeVisible();
  },
};

export const InvalidEmail = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText('Enter your email');
    await userEvent.type(input, 'invalid-email');
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await waitFor(() => {
      expect(canvas.getByText('Invalid email format')).toBeVisible();
    });
  },
};

export const EmptySubmit = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await waitFor(() => {
      expect(canvas.getByText('Empty email field')).toBeVisible();
    });
  },
};
